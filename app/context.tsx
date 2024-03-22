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
import { Session } from 'next-auth'
import useFetch from '@/hooks/use-fetch'

export type UserLocationType = {
  latitude: number
  longitude: number
}

interface Props {
  userLocation: UserLocationType
  userProfile: UserType | any
  member: MemberType[]
  organizations: OrganizationType[]
  orders: OrderType[]
}

const PlatformContext = createContext<Props | any>({})

export const PlatformProvider = ({
  children,
  session,
}: Readonly<{
  children: ReactNode
  session: Session
}>) => {
  const userId: string = session?.user?.id
  const userPhone: string = session?.user?.phone
  const authorization: string = session?.user?.authorization ?? ''
  const authorizationKey: string = session?.user?.authorizationKey ?? ''

  const { data: userProfile }: any = useFetch<UserType>({
    url: `${process.env.USER_API_URL}/users/${userId}`,
    authorization: authorization,
  })

  const { data: member }: any = useFetch<MemberType[]>({
    url: `${process.env.ORGANIZATION_API_URL}/members/phone/${userPhone}`,
    authorizationKey: authorizationKey,
  })
  const { data: orders }: any = useFetch<OrderType[]>({
    url: `${process.env.ORDER_API_URL}/orders/member/${userPhone}`,
    authorizationKey: authorizationKey,
  })

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
  //console.log('userProfile:', userProfile
  //console.log('member: ', member)
  //console.log('orders: ', orders)

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

  const organizations: OrganizationType[] | any = member?.map(
    (member: MemberType) => member.organization,
  )

  //console.log('organizations: ', organizations)

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
