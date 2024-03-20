'use client'

import { OrderType } from '@/types/order'
import { useOrganization } from '../../context'
import { OrganizationType } from '@/types/organization'
import MapBox from '@/components/MapBox'
import { Suspense } from 'react'
import MapMarker from '@/components/MapMarker'
import OrderDetailMarker from './OrderDetailMarker'

export default function OrderMapView() {
  const { orders }: OrderType[] | any = useOrganization()
  const { organization }: OrganizationType | any = useOrganization()

  const logotipo = organization?.image || '/logotipo.svg'

  return orders?.length > 0 ? (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full space-2">
          <MapBox
            //key={organization?.id!}
            latitude={organization?.latitude}
            longitude={organization?.longitude}
            zoom={12}
          >
            <Suspense fallback={'...'}>
              <MapMarker
                image={logotipo}
                //key={userProfile?.id!}
                color="blue"
                latitude={organization?.latitude}
                longitude={organization?.longitude}
                title={organization?.name}
              />
              {orders?.map((order: OrderType) => {
                return (
                  !order?.completed && (
                    <div key={order?.id}>
                      <OrderDetailMarker order={order} />
                    </div>
                  )
                )
              })}
            </Suspense>
          </MapBox>
        </div>
      </div>
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
