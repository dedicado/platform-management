import { ActionReducerMap } from '@ngrx/store'
import { ActionReducerState } from '../interfaces/state.interface'
import { accountReducer } from './accounts/account-reducers.state'

export const actionReducer: ActionReducerMap<ActionReducerState> = {
  accounts: accountReducer,
}
