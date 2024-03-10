'use client'

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
}

const PlatformContext = createContext<Props | any>({})

export const PlatformProvider = ({
  children,
  userProfile,
}: {
  children: ReactNode
  userProfile: UserType | any
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

  return (
    <PlatformContext.Provider value={{ userLocation, userProfile }}>
      {children}
    </PlatformContext.Provider>
  )
}

export const usePlatform = (): Promise<Props> => {
  return useContext(PlatformContext)
}

export const PlatformConsumer = PlatformContext.Consumer
