'use client'

import { UserLocationType, usePlatform } from '@/app/context'
import MapMarker from '@/components/MapMarker'
import { UserType } from '@/types/user'
import dynamic from 'next/dynamic'

export default function UserMapBox() {
  const { userLocation }: UserLocationType | any = usePlatform()
  const { userProfile }: UserType | any = usePlatform()

  const Map = dynamic(() => import('@/components/MapBox'), { ssr: false })

  return userLocation?.latitude ? (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col w-full space-2">
        <Map
          //key={userProfile?.id!}
          latitude={userLocation?.latitude}
          longitude={userLocation?.longitude}
          zoom={16}
        >
          <MapMarker
            image={userProfile?.image}
            //key={userProfile?.id!}
            latitude={userLocation?.latitude}
            longitude={userLocation?.longitude}
            title={userProfile?.name}
          />
        </Map>
      </div>
    </div>
  ) : null
}
