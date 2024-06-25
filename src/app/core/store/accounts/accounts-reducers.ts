import { createReducer, on } from '@ngrx/store'
import { Status } from '../../enums/status.enum'
import { AccountState } from '../../interfaces/state.interface'
import { accountsActions } from './accounts-actions'

const initialState: AccountState = {
  error: null,
  status: Status.pending,
  accounts: [],
}

export const accountsReducer = createReducer(
  initialState,
  on(accountsActions.findAllSucceeded, (state, action) => {
    return {
      ...state,
      accounts: action.data,
      status: Status.success,
    }
  }),
  on(accountsActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
      status: Status.success,
    }
  }),
)
