'use client'

import { getUserByDocument, getUserByPhone } from '@/app/main/users/actions'
import MapBoxMarker from '@/components/MapBoxMarker'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import { getAddressByZipCode } from '@/utils/handle-address'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import { Suspense, useCallback, useEffect, useState } from 'react'

interface Props {
  order: OrderType | any
}

export default function OrderMapMarker(props: Props) {
  const { order } = props

  const [member, setMember] = useState<UserType | any>()
  const [customer, setCustomer] = useState<UserType | any>()
  const [address, setAddress] = useState<AddressTypeByZipCode | any>()

  const data = useCallback(async () => {
    try {
      const member = await getUserByPhone(order?.member)
      member && setMember(member)

      const customer = await getUserByDocument(order?.customer)
      customer && setCustomer(customer)

      const address = await getAddressByZipCode(customer?.zipCode)
      address && setAddress(address)

      return member
    } catch (error: any) {
      return null
    }
  }, [order])

  useEffect(() => {
    if (order) data()
  }, [data, order])

  return order && member && customer && address ? (
    <Suspense>
      {member?.available && (
        <MapBoxMarker
          latitude={member?.latitude}
          longitude={member?.longitude}
          image={member?.image}
          title={member?.name}
        >
          <div className="flex justify-center">
            <small className="text-xs text-center opacity-50">{`${member?.latitude}, ${member?.longitude}`}</small>
          </div>
        </MapBoxMarker>
      )}

      <MapBoxMarker
        latitude={
          order?.destinationLatitude ||
          order?.latitude ||
          customer?.latitude ||
          address?.lat
        }
        longitude={
          order?.destinationLongitude ||
          order?.longitude ||
          customer?.longitude ||
          address?.lng
        }
        title={order?.subject || order?.code}
        color={order?.started ? 'green' : 'orange'}
      >
        <div className="flex justify-center">
          <small className="text-xs text-center opacity-50">{`${
            order?.destinationLatitude ||
            order?.latitude ||
            customer?.latitude ||
            address?.lat
          }, ${
            order?.destinationLongitude ||
            order?.longitude ||
            customer?.longitude ||
            address?.lng
          }`}</small>
        </div>
      </MapBoxMarker>
    </Suspense>
  ) : null
}
