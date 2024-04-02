'use client'

import { LocationType } from '@/app/context'
import { OrderType } from '@/types/order'
import { getRoutesByCoordinations } from '@/utils/handle-location'
import { Fragment, useCallback, useEffect, useState } from 'react'
import MapBoxMarker from './MapBoxMarker'
import MapBoxSource from './MapBoxSource'

interface Props {
  location: LocationType
  order: OrderType
}

export default function UserMapBoxMarker(props: Props) {
  const { location, order } = props

  const [routes, setRoutes] = useState<[]>([])
  const data = useCallback(async () => {
    if (!order) return null
    const coordinates = await getRoutesByCoordinations({
      origin: {
        latitude: order?.started
          ? location?.latitude || order?.latitude || order?.originLatitude
          : order?.latitude || order?.originLatitude,
        longitude: order?.started
          ? location?.longitude || order?.longitude || order?.originLongitude
          : order?.longitude || order?.originLongitude,
      },
      destination: {
        latitude: order?.latitude || order?.destinationLatitude,
        longitude: order?.longitude || order?.destinationLongitude,
      },
    })
    coordinates && setRoutes(coordinates?.routes[0]?.geometry?.coordinates)
  }, [order, location])

  useEffect(() => {
    if (order?.started) data()
  }, [data, order])

  return order ? (
    <Fragment>
      <MapBoxMarker
        latitude={order?.latitude || order?.destinationLatitude}
        longitude={order?.longitude || order?.destinationLongitude}
        title={order?.subject || order?.code}
        color={order?.started ? 'green' : 'orange'}
      >
        <div className="flex justify-center">
          <small className="text-xs text-center opacity-50">{`${
            order?.destinationLatitude || order?.latitude
          }, ${order?.destinationLongitude || order?.longitude}`}</small>
        </div>
      </MapBoxMarker>
      {order?.started && <MapBoxSource routes={routes} />}
    </Fragment>
  ) : null
}
