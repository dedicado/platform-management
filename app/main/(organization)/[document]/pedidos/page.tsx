'use client'

import PageDisplay from '@/components/PageDisplay'
import { Suspense } from 'react'
import { useOrganization } from '../context'
import OrganizationMenu from '../components/OrganizationMenu'
import OrderTabsView from './views/OrderTabsView'

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
          <OrderTabsView />
        </Suspense>
      ) : null}
    </PageDisplay>
  )
}
export default OrderPage
