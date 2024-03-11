'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import OrderView from './views/OrderView'
import { useOrganization } from '../context'
import NotFoundPage from '@/app/not-found'
import dynamic from 'next/dynamic'

const OrdersMapView = dynamic(() => import('./views/OrdersMapView'), {
  ssr: false,
})

const OrderPage = async () => {
  const { organization }: any = useOrganization()

  return !organization.status ? (
    <PageDisplay
      title={`pedidos da organização ${organization?.name || ''}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      <OrderView />
      <div className="relative w-full">
        <OrdersMapView />
      </div>
    </PageDisplay>
  ) : (
    <NotFoundPage />
  )
}
export default memo(OrderPage)
