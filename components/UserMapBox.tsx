'use client'

import { UserLocationType, usePlatform } from '@/app/context'
import MapBox from '@/components/MapBox'
import MapMarker from '@/components/MapMarker'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import moment from 'moment-timezone'
import 'moment/locale/pt-br'
//import dynamic from 'next/dynamic'
import { Fragment } from 'react'

export default function UserMapBox() {
  const { userLocation }: UserLocationType | any = usePlatform()
  const { userProfile }: UserType | any = usePlatform()
  const { orders }: OrderType[] | any = usePlatform()

  //console.log('orders: ', orders?.length)

  //const Map = dynamic(() => import('@/components/MapBox'), { ssr: false })

  return userLocation?.latitude ? (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col w-full space-2">
        <MapBox
          //key={userProfile?.id!}
          latitude={userLocation?.latitude}
          longitude={userLocation?.longitude}
          zoom={12}
        >
          <Fragment>
            {orders?.length > 0 ? (
              orders?.map((order: OrderType) => {
                return (
                  !order?.canceled &&
                  !order?.completed && (
                    <div key={order?.id}>
                      <MapMarker
                        color={order?.started ? 'green' : 'red'}
                        image={order?.started && userProfile?.image}
                        //key={order?.id}
                        latitude={
                          order?.started
                            ? userLocation?.latitude
                            : order?.latitude || order?.destinationLatitude
                        }
                        longitude={
                          order?.started
                            ? userLocation?.longitude
                            : order?.longitude || order?.destinationLongitude
                        }
                        title={order?.subject || order?.code}
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <button
                            type="button"
                            className="p-2 w-full text-center font-light text-white uppercase cursor-pointer bg-sky-800 rounded-md shadow-md hover:opacity-75"
                          >
                            detalhes do pedido
                          </button>
                          <small className="text-center text-xs lowercase opacity-90">
                            {order?.destinationComplement}
                          </small>
                        </div>
                        <div
                          className={`p-2 w-full flex flex-col gap-2 ${
                            order?.started ? 'bg-sky-200/60' : 'bg-green-200/60'
                          } rounded-md shadow-md`}
                        >
                          <div className="lowercase space-x-2">
                            <label className="opacity-80">código:</label>
                            <h6 className="font-semibold uppercase">
                              {order?.code}
                            </h6>
                          </div>
                          <div className="lowercase space-x-2">
                            <label className="opacity-80">observações:</label>
                            <p className="font-semibold italic">
                              {order?.observation}
                            </p>
                          </div>
                          <div className="lowercase space-x-2">
                            <label className="opacity-80">prazo final:</label>
                            <span className="font-semibold">
                              {moment(order?.deadline)
                                .tz('America/Sao_Paulo')
                                .utc()
                                .format('lll')}
                            </span>
                          </div>
                          {order?.started ? (
                            <div className="flex flex-col justify-center items-center gap-2 my-2">
                              <button
                                type="button"
                                className="px-2 w-full text-center text-md text-white uppercase cursor-pointer bg-sky-400 rounded-md shadow-md hover:opacity-75"
                              >
                                adicionar uma observação ao pedido
                              </button>
                              <button
                                type="button"
                                className="px-2 w-full text-center text-md text-white uppercase cursor-pointer bg-green-400 rounded-md shadow-md hover:opacity-75"
                              >
                                finalizar pedido
                              </button>
                              <button
                                type="button"
                                className="px-2 w-full text-center text-md text-white uppercase cursor-pointer bg-orange-400 rounded-md shadow-md hover:opacity-75"
                              >
                                cancelar pedido
                              </button>
                            </div>
                          ) : (
                            <div className="flex flex-col justify-center items-center my-2">
                              <button
                                type="button"
                                className="px-2 w-full text-center text-md text-white uppercase cursor-pointer bg-green-400 rounded-md shadow-md hover:opacity-75"
                              >
                                atender pedido
                              </button>
                            </div>
                          )}
                        </div>
                      </MapMarker>
                    </div>
                  )
                )
              })
            ) : (
              <MapMarker
                image={userProfile?.image}
                //key={userProfile?.id!}
                latitude={userLocation?.latitude}
                longitude={userLocation?.longitude}
                title={userProfile?.name}
              />
            )}
          </Fragment>
        </MapBox>
      </div>
    </div>
  ) : null
}
