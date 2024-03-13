'use client'

import { UserLocationType, usePlatform } from '@/app/context'
import MapMarker from '@/components/MapMarker'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const MainView = () => {
  const { userLocation }: UserLocationType | any = usePlatform()

  const Map = dynamic(() => import('@/components/MapBox'), { ssr: false })
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col w-full space-2">
        {userLocation ? (
          <Suspense>
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
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default MainView
