import { createReducer, on } from '@ngrx/store'
import { Status } from '../../enums/status.enum'
import { AccountState } from '../../interfaces/state.interface'
import { accountActions } from './account-actions.state'

const initialState: AccountState = {
  error: null,
  status: Status.pending,
  accounts: [],
}

export const accountReducer = createReducer(
  initialState,
  on(accountActions.findAllSucceeded, (state, action) => {
    return {
      ...state,
      accounts: action.data,
      status: Status.success,
    }
  }),
  on(accountActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
      //accounts: action.data,
      status: Status.success,
    }
  }),
)
