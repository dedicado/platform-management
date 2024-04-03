'use server'

import { getServerSession } from 'next-auth'
import {
  AddressByGeolocationType,
  AddressByZipCodeType,
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
): Promise<AddressByZipCodeType | any> => {
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

export const getAddressByGeolocationType = async (
  latitude: number,
  longitude: number,
): Promise<AddressByGeolocationType | any> => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&autocomplete=true`
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const result = await data.json()
    const address: AddressByGeolocationType = {
      place: result?.features[0]?.place_name,
      street: result?.features[0]?.text,
      number: result?.features[0]?.address,
      district: result?.features[0]?.context[0]?.text,
      zipCode: result?.features[0]?.context[1]?.text,
      city: result?.features[0]?.context[3]?.text,
      state: result?.features[0]?.context[4]?.text,
      country: result?.features[0]?.context[5]?.text,
    }

    return address
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
