'use server'

import { getServerSession } from 'next-auth'
import {
  AddressTypeByGeolocation,
  AddressTypeByZipCode,
  GeolocationType,
  UpdateAddressType,
} from './types'
import { nextAuthOptions } from '@/libraries/next-auth'

export const updateAddress = async (
  inputs: UpdateAddressType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const { address, entity, id } = inputs
    switch (entity) {
      case 'organizations':
        const organization = await fetch(
          `${process.env.ORGANIZATION_API_URL}/organizations/${id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(address),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session?.user?.authorizationKey}`,
            },
          },
        )
        return organization && (await organization.json())

      case 'users':
        const user = await fetch(`${process.env.USER_API_URL}/users/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(address),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.authorization}`,
          },
        })

        return user && (await user.json())
      default:
        return null
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getAddressByZipCode = async (
  zipCode: string,
): Promise<AddressTypeByZipCode | any> => {
  try {
    const address = await fetch(`${process.env.ZIPCODE_API_URL}/${zipCode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await address.json()
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
