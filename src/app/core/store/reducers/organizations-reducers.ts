import { createReducer, on } from '@ngrx/store'
import { OrganizationState } from '../../interfaces/state.interface'
import { organizationsActions } from '../actions/organizations-actions'

const initialState: OrganizationState = {
  organizations: [],
}

export const organizationsReducers = createReducer(
  initialState,
  on(organizationsActions.findAll, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.findAllSucceeded, (state, action) => {
    return {
      ...state,
      users: action.payload,
    }
  }),
  on(organizationsActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.createSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(organizationsActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      user: action.payload,
    }
  }),
)
