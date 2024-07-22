export interface Address {
  zipCode?: string
  street?: string
  complement?: string
  district?: string
  city?: string
  state?: string
  country?: string
  latitude?: number
  longitude?: number
}

export interface AwesomeApiAddress {
  readonly cep: string
  readonly address_type: string
  readonly address_name: string
  readonly address: string
  readonly state: string
  readonly district: string
  readonly lat: string
  readonly lng: string
  readonly city: string
  readonly city_ibge: string
  readonly ddd: string
}
