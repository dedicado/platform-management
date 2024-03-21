'use client'

import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { UserType } from '@/types/user'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react'
import { registerLocation } from './actions'
import { ProfileLocationUpdateValidationType } from '@/validations/profile'

export type UserLocationType = {
  latitude: number
  longitude: number
}

interface Props {
  userLocation: UserLocationType
  userProfile: UserType | any
  member: MemberType[] | any
  organizations: OrganizationType[] | any
  orders: OrderType[] | any
}

const PlatformContext = createContext<Props | any>({})

export const PlatformProvider = ({
  children,
  userProfile,
  member,
  orders,
}: Readonly<{
  children: ReactNode
  userProfile: UserType
  member: MemberType[]
  orders: OrderType[]
}>) => {
  const lastPosition: UserLocationType | any = useMemo(() => {
    let latitude: number | null = userProfile?.latitude
    let longitude: number | null = userProfile?.longitude

    return {
      latitude: latitude,
      longitude: longitude,
    }
  }, [userProfile])

  const [isPending, startTransition] = useTransition()

  const [userLocation, setUserLocation] =
    useState<UserLocationType>(lastPosition)

  //console.log('lastPosition: ', lastPosition)
  //console.log('userLocation: ', userLocation)
  //console.log('userProfile:', userProfile )

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        userProfile &&
          navigator?.geolocation.watchPosition((position) => {
            if (!position) return null
            const coordinates: UserLocationType = {
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
            }
            startTransition(() => setUserLocation(coordinates))
          })

        const available = userProfile?.available
        const unlike: boolean = userLocation !== lastPosition

        //console.log('unlike: ', unlike)
        //console.log('available: ', available)

        available &&
          setTimeout(async () => {
            const registerUserLocation: ProfileLocationUpdateValidationType = {
              ...userLocation,
            }

            //console.log('registerUserLocation: ', registerUserLocation)
            //console.log(new Date())

            unlike && (await registerLocation(registerUserLocation))
          }, 60000)
      } catch (error: any) {
        //console.error('getUserLocation: ', error)
        return null
      }
    }
    getUserLocation()
  }, [lastPosition, userLocation, userProfile])

  const organizations: OrganizationType[] | any = member.map(
    (member: MemberType) => member.organization,
  )

  return (
    <PlatformContext.Provider
      value={{ userLocation, userProfile, member, organizations, orders }}
    >
      {children}
    </PlatformContext.Provider>
  )
}

export const usePlatform = (): Promise<Props> => {
  return useContext(PlatformContext)
}

export const PlatformConsumer = PlatformContext.Consumer
