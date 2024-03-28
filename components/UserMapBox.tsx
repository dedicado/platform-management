'use client'

import { LocationType, usePlatform } from '@/app/context'
import MapBox from '@/components/MapBox'
import MapMarker from '@/components/MapMarker'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import moment from 'moment-timezone'
import 'moment/locale/pt-br'
import { Fragment } from 'react'
import UserMapMarker from './UserMapMarker'
import MapSource from './MapSource'

export default function UserMapBox() {
  const { location }: LocationType | any = usePlatform()
  const { user }: UserType | any = usePlatform()
  const { orders }: OrderType[] | any = usePlatform()

  const image = user?.image || 'avatar.svg'

  return location?.latitude ? (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col w-full space-2">
        <MapBox
          //key={user?.id!}
          latitude={location?.latitude}
          longitude={location?.longitude}
          zoom={12}
        >
          <Fragment>
            {orders?.length > 0 ? (
              <Fragment>
                <MapMarker
                  image={image}
                  //key={user?.id!}
                  latitude={location?.latitude}
                  longitude={location?.longitude}
                  title={user?.name}
                />
                {orders?.map((order: OrderType) => {
                  return (
                    !order?.canceled &&
                    !order?.completed && (
                      <div key={order?.id}>
                        {order?.started && (
                          <MapSource
                            destination={{
                              longitude: order?.destinationLongitude,
                              latitude: order?.destinationLatitude,
                            }}
                            origin={{
                              longitude: order?.originLongitude,
                              latitude: order?.originLatitude,
                            }}
                            location={{
                              longitude: location?.longitude,
                              latitude: location?.latitude,
                            }}
                            id={order?.id}
                          />
                        )}
                        <UserMapMarker order={order} />
                      </div>
                    )
                  )
                })}
              </Fragment>
            ) : (
              <MapMarker
                image={image}
                //key={user?.id!}
                latitude={location?.latitude}
                longitude={location?.longitude}
                title={user?.name}
              />
            )}
          </Fragment>
        </MapBox>
      </div>
    </div>
  ) : null
}
