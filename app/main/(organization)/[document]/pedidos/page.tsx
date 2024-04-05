'use client'

import PageDisplay from '@/components/PageDisplay'
import { Suspense } from 'react'
import OrganizationMenu from '../components/OrganizationMenu'
import OrderTabsView from './views/OrderTabsView'
import { RoleProvider } from '@/contexts/RoleContext'
import { useOrganization } from '@/contexts/OrganizationContext'

const OrderPage = () => {
  const { organization, orders }: any = useOrganization()

  return (
    <PageDisplay
      title={`pedidos da organização ${organization?.name ?? ''}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      {orders ? (
        <Suspense>
          <OrganizationMenu />
          <RoleProvider
            document={organization?.document}
            roles={['owner', 'administrator']}
          >
            <OrderTabsView />
          </RoleProvider>
        </Suspense>
      ) : null}
    </PageDisplay>
  )
}
export default OrderPage
