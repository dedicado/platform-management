'use client'

import { LocationType, usePlatform } from '@/app/context'
import LeafletMapMarker from '@/components/LeafletMapMarker'
import dynamic from 'next/dynamic'

export default function ManView() {
  const { location }: LocationType | any = usePlatform()

  const LeafletMap = dynamic(() => import('@/components/LeafletMap'), {
    ssr: true,
    loading: () => (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-center text-xs">...carregando</p>
      </div>
    ),
  })

  return location ? (
    <div className="relative">
      <LeafletMap latitude={location?.latitude} longitude={location?.longitude}>
        <LeafletMapMarker
          latitude={location?.latitude}
          longitude={location?.longitude}
          title={'sua localização'}
        >
          <small className="text-xs opacity-50">{`${location?.latitude}, ${location?.longitude}`}</small>
        </LeafletMapMarker>
      </LeafletMap>
    </div>
  ) : null
}
