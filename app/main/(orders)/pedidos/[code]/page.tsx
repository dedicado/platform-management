import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'

const OrderDetailPage = ({ params }: { params: { code: string } }) => {
  const { code } = params

  return (
    <PageDisplay
      title={`detailhes do pedido ${code}`}
      subtitle={`a melhor plataforma de serviços`}
    >
      ...
    </PageDisplay>
  )
}
export default memo(OrderDetailPage)
