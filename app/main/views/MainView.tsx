'use client'

import { UserLocationType, usePlatform } from '@/app/context'
import MapMarker from '@/components/MapMarker'
import dynamic from 'next/dynamic'

const MainView = () => {
  const { userLocation }: UserLocationType | any = usePlatform()

  const Map = dynamic(() => import('@/components/MapBox'), { ssr: false })

  return userLocation?.latitude ? (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col w-full space-2">
        <Map
          latitude={userLocation?.latitude}
          longitude={userLocation?.longitude}
          zoom={16}
        >
          <MapMarker
            latitude={userLocation?.latitude}
            longitude={userLocation?.longitude}
          />
        </Map>
      </div>
    </div>
  ) : null
}

export default MainView
