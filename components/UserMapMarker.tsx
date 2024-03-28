'use client'

import { getUserByDocument } from '@/app/main/users/actions'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import { getAddressByZipCode } from '@/utils/handle-address'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import { Fragment, useEffect, useState } from 'react'
import moment from 'moment-timezone'
import 'moment/locale/pt-br'
import MapMarker from './MapMarker'

interface Props {
  order: OrderType | any
}

export default function UserMapMarker(props: Props) {
  const { order } = props

  const [customer, setCustomer] = useState<UserType | any>()
  const [address, setAddress] = useState<AddressTypeByZipCode | any>()

  useEffect(() => {
    if (order) {
      const data = async () => {
        try {
          const customer = await getUserByDocument(order?.customer)
          customer && setCustomer(customer)

          const address = await getAddressByZipCode(customer?.zipCode)
          address && setAddress(address)
        } catch (error: any) {
          return null
        }
      }
      data()
    }
  }, [order])

  return order && customer && address ? (
    <Fragment>
      {order?.started}
      <MapMarker
        color={order?.started ? 'green' : 'red'}
        //image={customer?.image}
        //key={order?.id}
        latitude={order?.destinationLatitude || order?.latitude}
        longitude={order?.destinationLongitude || order?.longitude}
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
            <h6 className="font-semibold uppercase">{order?.code}</h6>
          </div>
          <div className="lowercase space-x-2">
            <label className="opacity-80">observações:</label>
            <p className="font-semibold italic">{order?.observation}</p>
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
    </Fragment>
  ) : null
}
