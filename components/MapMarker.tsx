'use client'

import { MdLocationPin } from 'react-icons/md'
import { Marker } from 'react-map-gl'

interface Props {
  latitude: number
  longitude: number
}

export default function MapMarker(props: Props) {
  const { latitude, longitude } = props

  return (
    <div>
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <MdLocationPin size={32} color="#dc2626" />
      </Marker>
    </div>
  )
}
