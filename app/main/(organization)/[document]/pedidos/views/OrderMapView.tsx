'use client'

import { OrderType } from '@/types/order'
import { useOrganization } from '../../context'

export default function OrderMapView() {
  const { orders }: OrderType[] | any = useOrganization()

  return orders?.length > 0 ? (
    <div className="relative">
      <h1>mapa de pedidos</h1>
    </div>
  ) : (
    <div className="relative">
      <div className="py-4">
        <h4 className="text-center text-xl dark:text-white lowercase ">
          não existem pedidos para esta organização
        </h4>
      </div>
    </div>
  )
}
