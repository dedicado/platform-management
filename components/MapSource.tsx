'use client'

import { getRoutesByCoordinate } from '@/utils/handle-routes'
import { useEffect, useState } from 'react'
import { Layer, Source } from 'react-map-gl'

type MapSourceCoordinatesType = {
  longitude: number
  latitude: number
}

interface Props {
  destination: MapSourceCoordinatesType
  id: string
  location?: MapSourceCoordinatesType | any
  origin?: MapSourceCoordinatesType | any
}

export default function MapSource(props: Props) {
  const { destination, id, location, origin } = props

  const [routes, setRoutes] = useState([])

  useEffect(() => {
    if (destination) {
      const data = async () => {
        try {
          const routes = await getRoutesByCoordinate({
            destination: destination,
            origin: location || origin,
          })
          routes && setRoutes(routes)
        } catch (error: any) {
          return null
        }
      }
      data()
    }
  }, [destination, location, origin])

  return routes ? (
    <div className="relative">
      <Source
        id={id}
        type="geojson"
        data={{
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'LineString', coordinates: [...routes] },
              properties: null,
            },
          ],
        }}
      >
        <Layer
          id={id}
          type="line"
          layout={{ 'line-join': 'round', 'line-cap': 'round' }}
          paint={{
            'line-color': 'green',
            'line-width': 4,
            'line-opacity': 0.5,
          }}
        />
      </Source>
    </div>
  ) : null
}
