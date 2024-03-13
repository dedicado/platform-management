'use client'

import { ReactNode } from 'react'
import Map from 'react-map-gl'

interface Props {
  children?: ReactNode
  latitude: number
  longitude: number
  zoom?: number
}

export default function MapBox(props: Props) {
  const { children, latitude, longitude, zoom } = props

  return (
    <div className="text-xs">
      <div className="rounded-md overflow-hidden">
        <Map
          mapLib={import('mapbox-gl')}
          mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: longitude,
            latitude: latitude,
            zoom: zoom || 8,
          }}
          style={{ width: '100%', height: 600, borderRadius: 10 }}
          mapStyle={process.env.MAPBOX_STYLES}
        >
          <div>{children}</div>
        </Map>
      </div>
    </div>
  )
}
