import { AddressValidationType } from '@/validations/address'

export type AddressTypeByZipCode = {
  cep: string
  address_type: string
  address_name: string
  address: string
  state: string
  district: string
  lat: string
  lng: string
  city: string
  city_ibge: string
  ddd: string
}

export type UpdateAddressType = {
  address: AddressValidationType
  id: string
  entity: 'users' | 'organizations'
}

export type GeolocationType = {
  latitude: number
  longitude: number
}

export type AddressTypeByGeolocation = {
  place: string
  street: string
  number: string
  district: string
  zipCode: string
  city: string
  state: string
  country: string
}
