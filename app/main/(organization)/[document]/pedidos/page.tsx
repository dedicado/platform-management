import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import OrderView from './views/OrderView'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'pedidos da minha organização',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const OrderPage = async ({ params }: { params: { document: string } }) => {
  const { document } = params
  return (
    <PageDisplay
      title={document || 'pedidos dedicado'}
      subtitle={document || 'a melhor plataforma de serviços'}
    >
      <OrderView />
    </PageDisplay>
  )
}
export default memo(OrderPage)
