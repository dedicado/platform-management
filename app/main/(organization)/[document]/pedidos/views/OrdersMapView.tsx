'use client'

import { OrderType } from '@/types/order'
import { useOrganization } from '../../context'

export default function OrdersMapView() {
  const { orders }: OrderType[] | any = useOrganization()

  return (
    <div className="relative w-full bg-sky-400 rounded-md shadow-md">
      <div></div>
    </div>
  )
}
