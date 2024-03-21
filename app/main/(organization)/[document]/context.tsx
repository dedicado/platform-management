'use client'

import useFetch from '@/hooks/use-fetch'
import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { Session } from 'next-auth'
import { ReactNode, createContext, useContext } from 'react'

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
  const { data: organization } = useFetch<OrganizationType | any>(
    `${process.env.ORGANIZATION_API_URL}/organizations/document/${document}`,
    session?.user?.authorizationKey!,
  )
  const { data: orders } = useFetch<OrderType[] | any>(
    `${process.env.ORDER_API_URL}/orders/organization/${document}`,
    session?.user?.authorizationKey!,
  )
  const members: MemberType[] | any = organization?.members

  return (
    <OrganizationContext.Provider value={{ organization, members, orders }}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = (): Promise<Props> => {
  return useContext(OrganizationContext)
}

export const OrganizationConsumer = OrganizationContext.Consumer
