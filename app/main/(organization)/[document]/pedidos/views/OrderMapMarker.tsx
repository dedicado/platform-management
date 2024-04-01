'use client'

import { getUserByDocument, getUserByPhone } from '@/app/main/users/actions'
import MapMarker from '@/components/MapMarker'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import { getAddressByZipCode } from '@/utils/handle-address'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import { Suspense, useEffect, useState } from 'react'

interface Props {
  order: OrderType | any
}

export default function OrderMapMarker(props: Props) {
  const { order } = props

  const [member, setMember] = useState<UserType | any>()
  const [customer, setCustomer] = useState<UserType | any>()
  const [address, setAddress] = useState<AddressTypeByZipCode | any>()

  useEffect(() => {
    if (order) {
      const data = async () => {
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
      }
      data()
    }
  }, [order, member])

  return order && member && customer && address ? (
    <Suspense>
      <MapMarker
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
        ...
      </MapMarker>
    </Suspense>
  ) : null
}
