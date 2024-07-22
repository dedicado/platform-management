import { UserRole } from '../enum/role.enum'
import { Information } from './information.interface'
import { Address } from './location.interface'
import { Membership } from './membership.interface'

export interface User extends Address, Information {
  roles: UserRole
  membership: Membership[]
}

export interface UsersState {
  count?: number
  error?: string | undefined
  many?: User[] | []
  one?: User | undefined
  success: boolean
}
