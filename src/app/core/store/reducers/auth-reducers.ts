import { createReducer, on } from '@ngrx/store'
import { AuthState } from '../../interfaces/state.interface'
import { authActions } from '../actions/auth-actions'

const initialState: AuthState = {
  isAuthenticated: false,
  isValidated: false,
  payload: null,
}

export const authReducers = createReducer(
  initialState,
  on(authActions.validation, (state, action) => {
    return {
      ...state,
    }
  }),
  on(authActions.validationSucceeded, (state, acttion) => {
    return {
      ...state,
      isValidated: true,
    }
  }),
  on(authActions.authentication, (state, action) => {
    return {
      ...state,
    }
  }),
  on(authActions.authenticationSucceeded, (state, action) => {
    return {
      ...state,
      isValidated: true,
      isAuthenticated: true,
      payload: state.payload,
    }
  }),
)
