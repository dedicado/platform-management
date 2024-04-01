'use client'

import { LocationType, usePlatform } from '@/app/context'
import MapMarker from '@/components/MapMarker'
import dynamic from 'next/dynamic'

export default function ManView() {
  const { location }: LocationType | any = usePlatform()

  const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-center text-xs">...carregando</p>
      </div>
    ),
  })

  return (
    <div className="relative">
      {location && (
        <Map latitude={location?.latitude} longitude={location?.longitude}>
          <MapMarker
            latitude={location?.latitude}
            longitude={location?.longitude}
            title={'sua localização'}
          />
        </Map>
      )}
    </div>
  )
}
