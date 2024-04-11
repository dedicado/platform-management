'use client'

import { getOrganizationByDocument } from '@/app/main/(organization)/[document]/actions'
import { getOrdersByOrganization } from '@/app/main/(organization)/[document]/pedidos/actions'
import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { Session } from 'next-auth'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

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
  const [members, setMembers] = useState<MemberType[]>()
  const [orders, setOrders] = useState<OrderType[]>()
  const [organization, setOrganization] = useState<OrganizationType>()

  const data = useCallback(async () => {
    try {
      if (!session) return null

      const organization = await getOrganizationByDocument(document)
      setOrganization(organization)

      organization && setMembers(organization?.members)

      await getOrdersByOrganization(document).then((data) => setOrders(data))
    } catch (error: any) {
      console.error(error)
      return null
    }
  }, [document, session])

  useEffect(() => {
    if (session) data()
  }, [data, session])

  return (
    <OrganizationContext.Provider
      value={session ? { members, orders, organization } : null}
    >
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = (): Promise<Props> => {
  return useContext(OrganizationContext)
}

export const OrganizationConsumer = OrganizationContext.Consumer
