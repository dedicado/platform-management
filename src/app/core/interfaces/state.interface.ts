import { Status } from '../enums/status.enum'
import { Account } from './account.interface'

export interface AccountState {
  accounts: Account[]
  error: '' | null
  status: Status
}

export interface ActionReducerState {
  accounts: AccountState
}
