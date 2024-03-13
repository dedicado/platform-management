'use client'

import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { LastLocationType, UserType } from '@/types/user'
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
import { CreateLastLocationValidationType } from '@/validations/last-location'

export type UserLocationType = {
  latitude: number
  longitude: number
}

interface Props {
  userLocation: UserLocationType
  userProfile: UserType
  member: MemberType[]
  organizations: OrganizationType[]
  orders: OrderType[]
}

const PlatformContext = createContext<Props | any>({})

export const PlatformProvider = ({
  children,
  userProfile,
  member,
  orders,
}: {
  children: ReactNode
  userProfile: UserType | any
  member: MemberType[] | any
  orders: OrderType[] | any
}) => {
  const lastPosition: UserLocationType | any = useMemo(() => {
    const lastUserPosition: LastLocationType | any =
      userProfile?.lastLocations?.at(-1)
    return {
      latitude: lastUserPosition?.latitude,
      longitude: lastUserPosition?.longitude,
    }
  }, [userProfile?.lastLocations])

  const [isPending, startTransition] = useTransition()

  const [userLocation, setUserLocation] =
    useState<UserLocationType>(lastPosition)

  //console.log('lastPosition: ', lastPosition)
  //console.log('userLocation: ', userLocation)

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        userProfile &&
          navigator?.geolocation.watchPosition((position) => {
            if (!position) return null
            let coordinates: UserLocationType = {
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
            }
            let registerUserLocation: CreateLastLocationValidationType = {
              userPhone: userProfile?.phone,
              latitude: coordinates?.latitude,
              longitude: coordinates?.longitude,
            }
            startTransition(() => setUserLocation(coordinates))
            let unlike: boolean = coordinates !== lastPosition
            let available: boolean = userProfile?.available

            //console.log('unlike: ', unlike)
            //console.log('available: ', available)

            unlike &&
              available &&
              startTransition(
                async () => await registerLocation(registerUserLocation),
              )
          })
      } catch (error: any) {
        //console.error('getUserLocation: ', error)
        return null
      }
    }
    getUserLocation()
  }, [lastPosition, userProfile])

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
