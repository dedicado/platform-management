'use client'

import { useOrganization } from '@/contexts/OrganizationContext'
import { OrderType } from '@/types/order'
import { useEffect, useState } from 'react'
import { MdAddLocationAlt } from 'react-icons/md'

interface Props {}

export default function OrganizationOrderBox(props: Props) {
  const {} = props

  const { orders }: OrderType[] | any = useOrganization()

  let orderCount: number = orders?.length || 0
  const [count, setCount] = useState<number>(orderCount)

  useEffect(() => {
    orders && setCount(orderCount)
  }, [orderCount, orders])

  return orders ? (
    <div
      className={`relative p-4 rounded-md shadow-md bg-gradient-to-r from-sky-600/80 to-sky-800/60 ${
        count == 0 ? 'opacity-20 hover:opacity-80' : 'opacity-100'
      }`}
    >
      <div className="w-full flex flex-col sm:flex-row justify-around items-center">
        <div className="mx-auto p-2">
          <MdAddLocationAlt className="text-white" size={48} />
        </div>
        <div className="mx-auto p-2">
          <h4 className="text-4xl sm:text-2xl text-center font-bold text-sky-400 dark:text-sky-200 shrink-0">
            gestão de pedidos
          </h4>
        </div>
        <div className="mx-auto p-2">
          <span className="text-xl sm:text-lg font-thin text-slate-200/80">
            {`${count} ${count == 1 ? ' pedido' : ' pedidos'}`}
          </span>
        </div>
      </div>
    </div>
  ) : null
}
