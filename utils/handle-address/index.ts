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
  const { address, entity, id } = inputs

  switch (entity) {
    case 'organizations':
      return await fetch(
        `${process.env.MANAGEMENT_API_URL}/organizations/${id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(address),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.authorization}`,
          },
        },
      ).then(async (data) => await data.json())
    case 'users':
      return await fetch(`${process.env.MANAGEMENT_API_URL}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(address),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.authorization}`,
        },
      }).then(async (data) => await data.json())

    default:
      return null
  }
}

export const getAddressByZipCode = async (
  zipCode: string,
): Promise<AddressByZipCodeType | any> => {
  return await fetch(`${process.env.ZIPCODE_API_URL}/${zipCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}

export const getAddressByGeolocationType = async (
  latitude: number,
  longitude: number,
): Promise<AddressByGeolocationType | any> => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}&autocomplete=true`

  return await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(async (data: any) => {
      const result = await data.json()
      return {
        place: result?.features[0]?.place_name,
        street: result?.features[0]?.text,
        number: result?.features[0]?.address,
        district: result?.features[0]?.context[0]?.text,
        zipCode: result?.features[0]?.context[1]?.text,
        city: result?.features[0]?.context[3]?.text,
        state: result?.features[0]?.context[4]?.text,
        country: result?.features[0]?.context[5]?.text,
      }
    })
    .catch((error: any) => error?.message)
}
