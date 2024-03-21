'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo, Suspense } from 'react'
import { useOrganization } from '../context'
import OrganizationMenu from '../views/OrganizationMenu'
import OrderTabsView from './views/OrderTabsView'

const OrderPage = async () => {
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
export default memo(OrderPage)
