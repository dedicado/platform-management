'use client'

import { Fragment, ReactNode } from 'react'
import { MdLocationPin } from 'react-icons/md'
import { Marker } from 'react-map-gl'

interface Props {
  children?: ReactNode
  latitude: number
  longitude: number
}

export default function MapBoxMarker(props: Props) {
  const { children, latitude, longitude } = props

  return (
    <Fragment>
      <Marker
        latitude={latitude}
        longitude={longitude}
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: 'auto',
        }}
      >
        <MdLocationPin size={32} color="red" />
      </Marker>
    </Fragment>
  )
}
