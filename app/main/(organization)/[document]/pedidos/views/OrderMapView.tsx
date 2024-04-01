'use client'

import { OrderType } from '@/types/order'
import { useOrganization } from '../../context'
import { OrganizationType } from '@/types/organization'
import { Suspense } from 'react'
import MapMarker from '@/components/MapMarker'
import { usePlatform, LocationType } from '@/app/context'
import dynamic from 'next/dynamic'
import OrderMapMarker from './OrderMapMarker'

export default function OrderMapView() {
  const { orders }: OrderType[] | any = useOrganization()
  const { organization }: OrganizationType | any = useOrganization()
  const { location }: LocationType | any = usePlatform()

  const logotipo = organization?.image || '/logotipo.svg'

  const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => (
      <div className="w-full flex justify-center items-center">
        <p className="text-center text-xs">...carregando</p>
      </div>
    ),
  })

  return orders?.length > 0 ? (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full space-2">
          <Map
            //key={organization?.id!}
            latitude={organization?.latitude || location?.latitude}
            longitude={organization?.longitude || location?.longitude}
            zoom={12}
          >
            <Suspense>
              <MapMarker
                //key={userProfile?.id!}
                latitude={organization?.latitude}
                longitude={organization?.longitude}
                title={organization?.name}
              />
              {orders?.map((order: OrderType) => {
                return (
                  !order?.completed && (
                    <div key={order?.id}>
                      <OrderMapMarker order={order} />
                    </div>
                  )
                )
              })}
            </Suspense>
          </Map>
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
