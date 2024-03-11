'use client'

import { Fragment, ReactNode } from 'react'
import ReactMapGL from 'react-map-gl'

interface Props {
  children?: ReactNode
  latitude: number
  longitude: number
  zoom?: number
}

export default function MapBox(props: Props) {
  const { children, latitude, longitude, zoom } = props

  return (
    <Fragment>
      <ReactMapGL
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: zoom || 10,
          pitch: 25,
          bearing: -14,
        }}
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: 'auto',
          minHeight: 420,
          fontSize: 11,
          textTransform: 'lowercase',
        }}
        mapStyle={process.env.MAPBOX_STYLES}
        mapboxAccessToken={process.env.MAPBOX_API_KEY}
      >
        {children}
      </ReactMapGL>
    </Fragment>
  )
}
