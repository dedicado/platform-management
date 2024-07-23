import { createReducer, on } from '@ngrx/store'
import { MembershipsState } from '../../interfaces/membership.interface'
import { membershipsActions } from './memberships-actions.store'

const initialState: MembershipsState = {
  success: false,
}

export const membershipsReducers = createReducer(
  initialState,
  on(membershipsActions.create, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membershipsActions.createSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
  on(membershipsActions.findByUser, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membershipsActions.findByUserSucceeded, (state, action) => {
    return {
      ...state,
      count: action.payload.length,
      many: action.payload,
      success: true,
    }
  }),
  on(membershipsActions.findMany, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membershipsActions.findManySucceeded, (state, action) => {
    return {
      ...state,
      count: action.payload.length,
      many: action.payload,
      success: true,
    }
  }),
  on(membershipsActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membershipsActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
    }
  }),
  on(membershipsActions.remove, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membershipsActions.removeSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
  on(membershipsActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(membershipsActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
)
