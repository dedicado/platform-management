import { ActionReducerMap } from '@ngrx/store'
import { ActionReducerState } from '../interfaces/state.interface'
import { accountsReducer } from './accounts/accounts-reducers'

export const actionReducer: ActionReducerMap<ActionReducerState> = {
  accounts: accountsReducer,
}
