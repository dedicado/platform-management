'use client'

import { OrderType } from '@/types/order'
import { useOrganization } from '../../context'
import MapBox from '@/components/MapBox'
import { UserLocationType, usePlatform } from '@/app/context'
import { UserType } from '@/types/user'
import MapBoxMarker from '@/components/MapBoxMarker'

export default function OrdersMapView() {
  const { orders }: OrderType[] | any = useOrganization()
  const { userLocation }: UserLocationType | any = usePlatform()
  const { userProfile }: UserType | any = usePlatform()

  return (
    <MapBox
      latitude={
        userLocation?.latitude || userProfile?.latitude || -27.570231674223447
      }
      longitude={
        userLocation?.longitude || userProfile?.longitude || -48.62897238835584
      }
      zoom={10}
    >
      {orders &&
        orders?.map((order: OrderType) => {
          return order?.destinationLatitude ? (
            <MapBoxMarker
              key={order?.id}
              latitude={order?.destinationLatitude}
              longitude={order?.destinationLongitude}
            />
          ) : null
        })}
    </MapBox>
  )
}
