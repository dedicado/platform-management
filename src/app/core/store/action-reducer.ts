import { ActionReducerMap } from '@ngrx/store'
import { ActionReducerState } from '../interfaces/state.interface'
import { accountsReducer } from './reducers/accounts-reducers'

export const actionReducer: ActionReducerMap<ActionReducerState> = {
  accounts: accountsReducer,
}
