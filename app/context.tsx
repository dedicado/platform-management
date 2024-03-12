'use client'

import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { LastLocationType, UserType } from '@/types/user'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
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
  const lastUserPosition: LastLocationType | any =
    userProfile?.lastLocations?.at(-1)
  const firstPosition: UserLocationType = {
    latitude: -27.59667,
    longitude: -48.54917,
  }
  const lastPosition: UserLocationType | any = {
    latitude: lastUserPosition?.latitude,
    longitude: lastUserPosition?.longitude,
  }
  const [isPending, startTransition] = useTransition()
  const [userLocation, setUserLocation] = useState<UserLocationType>(
    lastPosition || firstPosition,
  )

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
            const registerUserLocation: CreateLastLocationValidationType = {
              userPhone: userProfile?.phone,
              latitude: coordinates?.latitude,
              longitude: coordinates?.longitude,
            }
            startTransition(() => setUserLocation(coordinates))
            const samePosition = userLocation === lastPosition
            const avaiable = userProfile?.avaiable

            avaiable &&
              startTransition(
                async () =>
                  !samePosition &&
                  (await registerLocation(registerUserLocation)),
              )
          })
      } catch (error: any) {
        //console.error(error)
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
