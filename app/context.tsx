'use client'

import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { UserType } from '@/types/user'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useTransition,
} from 'react'

export type UserLocationType = {
  latitude: number | null
  longitude: number | null
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
  const [isPending, startTransition] = useTransition()
  const [userLocation, setUserLocation] = useState<UserLocationType>()

  const getUserLocation = async () => {
    try {
      userProfile &&
        navigator?.geolocation.watchPosition((position) => {
          if (!position) return null
          position &&
            startTransition(() =>
              setUserLocation({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
              }),
            )
        })
    } catch (error: any) {
      //console.error(error)
      return null
    }
  }
  setTimeout(async () => {
    await getUserLocation()
  }, 120000)

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
