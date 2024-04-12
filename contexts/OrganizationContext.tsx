'use client'

import { orderRepositoryFindByOrganization } from '@/repositories/order/GET'
import { organizationRepositoryFindByDocument } from '@/repositories/organization/GET'
import { OrderType } from '@/types/order'
import {
  MemberType,
  OrganizationType,
  SubscriptionType,
} from '@/types/organization'
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
  subscription: SubscriptionType
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
  const [subscription, setSubscription] = useState<SubscriptionType>()
  const [authorizationKey, setAuthorizationKey] = useState<string>('')

  const getOrganziation = useCallback(async () => {
    if (!session) return null

    const organization = await organizationRepositoryFindByDocument(document)
    setOrganization(organization)

    if (organization) {
      setMembers(organization?.members)
      setSubscription(organization?.subscription)
      setAuthorizationKey(organization?.authorizationKey)
    }
  }, [document, session])

  const getOrders = useCallback(async () => {
    if (!organization) return null

    await orderRepositoryFindByOrganization(document, authorizationKey).then(
      (data) => setOrders(data),
    )
  }, [authorizationKey, document, organization])

  useEffect(() => {
    if (session) getOrganziation()
    if (organization) getOrders()
  }, [getOrders, getOrganziation, organization, session])

  return (
    <OrganizationContext.Provider
      value={
        session
          ? { authorizationKey, members, orders, organization, subscription }
          : null
      }
    >
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = (): Promise<Props> => {
  return useContext(OrganizationContext)
}

export const OrganizationConsumer = OrganizationContext.Consumer
