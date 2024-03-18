import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'

const MyOrderPage = () => {
  return (
    <PageDisplay
      title={`espaço dedicado de pedidos`}
      subtitle={`a melhor plataforma de serviços`}
    >
      ...
    </PageDisplay>
  )
}
export default memo(MyOrderPage)
