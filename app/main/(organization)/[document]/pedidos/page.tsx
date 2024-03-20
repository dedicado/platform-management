'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import { useOrganization } from '../context'
import NotFoundPage from '@/app/not-found'
import OrganizationMenu from '../views/OrganizationMenu'
import OrderTabsView from './views/OrderTabsView'

const OrderPage = async () => {
  const { organization }: any = useOrganization()

  return !organization.status ? (
    <PageDisplay
      title={`pedidos da organização ${organization?.name || ''}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      <OrganizationMenu />
      <OrderTabsView />
    </PageDisplay>
  ) : (
    <NotFoundPage />
  )
}
export default memo(OrderPage)
