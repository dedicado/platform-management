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
import { ProfileLocationUpdateValidationType } from '@/validations/profile'
import { Session } from 'next-auth'
import { updateProfileLocation } from './main/perfil/actions'
import { getUserById } from './main/users/actions'
import { getOrdersByMember } from './main/(organization)/[document]/pedidos/actions'
import { getMemberByUserPhone } from './main/(organization)/[document]/membros/actions'

export type LocationType = {
  latitude: number
  longitude: number
}

interface Props {
  location: LocationType
  user: UserType | any
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
  const userId: string = session?.user?.id ?? ''
  const userPhone: string = session?.user?.phone ?? ''

  const [user, setUser] = useState<UserType | any>()
  const [member, setMember] = useState<MemberType[] | any>()
  const [orders, setOrders] = useState<OrderType[] | any>()

  useEffect(() => {
    if (session) {
      const data = async () => {
        try {
          const user = await getUserById(userId)
          user && setUser(user)

          const orders = await getOrdersByMember(userPhone)
          orders && setOrders(orders)

          const member = await getMemberByUserPhone(userPhone)
          member && setMember(member)
        } catch (error: any) {
          console.error(error)
          return null
        }
      }
      data()
    }
  }, [session, userId, userPhone])

  const organizations: OrganizationType[] | any = member?.map(
    (member: MemberType) => member.organization,
  )

  const lastPosition: LocationType | any = useMemo(() => {
    let latitude: number | null = user?.latitude
    let longitude: number | null = user?.longitude

    return {
      latitude: latitude,
      longitude: longitude,
    }
  }, [user])

  const [location, setLocation] = useState<LocationType>(lastPosition)

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (user) {
      const getUserLocation = async () => {
        try {
          navigator?.geolocation.watchPosition((position) => {
            if (!position) return null
            const coordinates: LocationType = {
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
            }
            startTransition(() => setLocation(coordinates))
          })

          const available = user?.available
          const unlike: boolean = location !== lastPosition

          available &&
            setTimeout(async () => {
              const registerLocation: ProfileLocationUpdateValidationType = {
                ...location,
              }

              unlike && (await updateProfileLocation(registerLocation))
            }, 60000)
        } catch (error: any) {
          return null
        }
      }
      getUserLocation()
    }
  }, [lastPosition, session, location, user])

  return (
    <PlatformContext.Provider
      value={session ? { location, user, member, organizations, orders } : null}
    >
      {children}
    </PlatformContext.Provider>
  )
}

export const usePlatform = (): Promise<Props> => {
  return useContext(PlatformContext)
}

export const PlatformConsumer = PlatformContext.Consumer
