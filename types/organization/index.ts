export type OrganizationType = {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  softDeleted: boolean
  active: boolean
  authorizationKey: string
  name: string
  image: string
  email: string
  phone: string
  document: string
  zipCode: string
  street: string
  complement: string
  latitude: number
  longitude: number
  members: MemberType[] | any
}

export type MemberType = {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  softDeleted: boolean
  active: boolean
  role: 'client' | 'assistant' | 'technician' | 'administrator' | 'owner'
  phone: string
  organization: OrganizationType | any
}
