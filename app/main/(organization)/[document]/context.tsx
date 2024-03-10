'use client'

import { OrderType } from '@/types/order'
import { MemberType, OrganizationType } from '@/types/organization'
import { ReactNode, createContext, useContext } from 'react'

interface Props {
  organization: OrganizationType
  members: MemberType[]
  orders: OrderType[]
}

const OrganizationContext = createContext<Props | any>({})

export const OrganizationProvider = async ({
  children,
  organization,
  orders,
}: {
  children: ReactNode
  organization: OrganizationType
  orders: OrderType[]
}) => {
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
