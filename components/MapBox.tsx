'use client'

import Map from 'react-map-gl'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  latitude: number
  longitude: number
  zoom?: number
}

export default function MapBox(props: Props) {
  const { children, latitude, longitude, zoom } = props

  return (
    <Map
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: zoom || 10,
        pitch: 25,
        bearing: -14,
      }}
      mapStyle={process.env.MAPBOX_STYLES}
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      style={{ width: '100%', height: 600, borderRadius: 10, zIndex: 0 }}
    >
      <div className="relative">{children}</div>
    </Map>
  )
}
