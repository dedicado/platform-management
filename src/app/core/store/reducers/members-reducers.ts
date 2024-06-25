import { createReducer, on } from '@ngrx/store'
import { MemberState } from '../../interfaces/state.interface'
import { membersActions } from '../actions/members-actions'

const initialState: MemberState = {
  members: [],
}

export const membersReducers = createReducer(
  initialState,
  on(membersActions.findAll, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membersActions.findAllSucceeded, (state, action) => {
    return {
      ...state,
      users: action.payload,
    }
  }),
  on(membersActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membersActions.createSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membersActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membersActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membersActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membersActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      user: action.payload,
    }
  }),
)
