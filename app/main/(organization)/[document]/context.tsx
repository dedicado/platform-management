'use client'

import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { Session } from 'next-auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { getOrganizationByDocument } from './actions'
import { getOrdersByOrganization } from './pedidos/actions'

interface Props {
  organization: OrganizationType
  members: MemberType[]
  orders: OrderType[]
}

const OrganizationContext = createContext<Props | any>({})

export const OrganizationProvider = ({
  children,
  document,
  session,
}: Readonly<{
  children: ReactNode
  document: string
  session: Session
}>) => {
  const [members, setMembers] = useState<MemberType[] | any>()
  const [orders, setOrders] = useState<OrderType[] | any>()
  const [organization, setOrganization] = useState<OrganizationType | any>()

  useEffect(() => {
    const data = async () => {
      try {
        if (session) {
          const organization = await getOrganizationByDocument(document)
          setOrganization(organization)

          organization && setMembers(organization?.members)

          const orders = await getOrdersByOrganization(document)
          setOrders(orders)
        }
      } catch (error: any) {
        console.error(error)
        return null
      }
    }
    data()
  }, [document, session])

  return (
    <OrganizationContext.Provider value={{ members, orders, organization }}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = (): Promise<Props> => {
  return useContext(OrganizationContext)
}

export const OrganizationConsumer = OrganizationContext.Consumer
