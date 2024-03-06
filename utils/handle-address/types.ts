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
