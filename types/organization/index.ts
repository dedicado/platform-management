import { UserType } from '../user'

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
  members: MemberType[]
}

export type MemberType = {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  softDeleted: boolean
  active: boolean
  role: 'client' | 'assistant' | 'technician' | 'administrator' | 'owner'
  user: UserType
  userId: string
  organization: OrganizationType
  organizationId: string
}
