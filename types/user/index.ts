export type UserType = {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  softDeleted: boolean
  active: boolean
  subscriber: boolean
  avaiable: boolean
  authorizationKey: boolean
  profile: 'guest' | 'consumer' | 'member' | 'master'
  name: string
  image: string
  email: string
  phone: string
  document: string
  accessCode: string
  passHash: string
  zipCode: string
  street: string
  complement: string
  latitude: number
  longitude: number
  lastLocations: LastLocationType[] | any
}

export type LastLocationType = {
  id: string
  createdAt: Date
  userId: string
  user: UserType | any
  latitude: number
  longitude: number
}
