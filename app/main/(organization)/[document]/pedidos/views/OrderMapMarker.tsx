'use client'

import { getUserByDocument, getUserByPhone } from '@/app/main/users/actions'
import LeafletMapMarker from '@/components/LeafletMapMarker'
import LeafletMapPolyline from '@/components/LeafletMapPolyline'
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
      <LeafletMapMarker
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
      </LeafletMapMarker>
      <LeafletMapPolyline
        destination={{
          latitude:
            order?.latitude ||
            order?.destinationLatitude ||
            customer.latitude ||
            address?.lat,
          longitude:
            order?.longitude ||
            order?.destinationLongitude ||
            customer?.longitude ||
            address?.lng,
        }}
        origin={{
          latitude: member?.latitude || order?.originLatitude,
          longitude: member?.longitude || order?.originLongitude,
        }}
      />
    </Suspense>
  ) : null
}
