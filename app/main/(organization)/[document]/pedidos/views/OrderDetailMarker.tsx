'use client'

import { getUserByDocument, getUserByPhone } from '@/app/main/users/actions'
import MapMarker from '@/components/MapMarker'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import { getAddressByGeolocation } from '@/utils/handle-address'
import { AddressTypeByGeolocation } from '@/utils/handle-address/types'
import moment from 'moment-timezone'
import 'moment/locale/pt-br'
import { useEffect, useState } from 'react'

interface Props {
  order: OrderType | any
}

export default function OrderDetailMarker(props: Props) {
  const { order } = props

  const [member, setMember] = useState<UserType | any>()
  const [customer, setCustomer] = useState<UserType | any>()
  const [address, setAddress] = useState<AddressTypeByGeolocation | any>()

  useEffect(() => {
    const data = async () => {
      try {
        if (order) {
          const member = await getUserByPhone(order?.member)
          member && setMember(member)

          const customer = await getUserByDocument(order?.customer)
          customer && setCustomer(customer)

          const address = await getAddressByGeolocation({
            latitude: order?.destinationLatitude,
            longitude: order?.destinationLongitude,
          })
          address && setAddress(address)
        }
        return member
      } catch (error: any) {
        return null
      }
    }
    data()
  }, [order, member])

  return order && member && customer && address ? (
    <MapMarker
      color={order?.started && member?.available ? 'green' : 'red'}
      image={order?.started && member?.available ? member?.image : null}
      //key={order?.id}
      latitude={
        order?.started && member?.available
          ? member?.latitude || customer.latitude
          : order?.latitude || order?.destinationLatitude
      }
      longitude={
        order?.started && member?.available
          ? member?.longitude || customer?.longitude
          : order?.longitude || order?.destinationLongitude
      }
      title={order?.subject || order?.code}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <span
          className={`${
            order?.started ? 'bg-green-400' : 'bg-orange-400'
          } p-1 w-full text-center font-thin rounded-md shadow-md`}
        >
          {order?.started ? 'em atendimento' : 'pendente de atendimento'}
        </span>
        <div className="lowercase flex space-x-2">
          <label className="opacity-80">responsável:</label>
          <h6 className="font-semibold uppercase">
            {member?.name || 'indisponível'}
          </h6>
        </div>

        <div className="bg-sky-600/50 w-full rounded-md py-1">
          <h4 className="text-xl text-center lowercase">{customer?.name}</h4>
        </div>
        <small className="text-center text-xs lowercase opacity-90">
          {address?.place}
        </small>
      </div>
      <div
        className={`p-2 w-full flex flex-col gap-2 bg-slate-200 rounded-md shadow-md`}
      >
        <div className="lowercase space-x-2">
          <label className="opacity-80">código:</label>
          <h6 className="font-semibold uppercase">{order?.code}</h6>
        </div>
        <div className="lowercase space-x-2">
          <label className="opacity-80">observações:</label>
          <p className="font-semibold italic">{order?.observation}</p>
        </div>
        {order?.deadline && (
          <div className="lowercase space-x-2">
            <label className="opacity-80">prazo final:</label>
            <span className="font-semibold">
              {moment(order?.deadline)
                .tz('America/Sao_Paulo')
                .utc()
                .format('lll')}
            </span>
          </div>
        )}
      </div>
    </MapMarker>
  ) : null
}
