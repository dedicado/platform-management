import { createReducer, on } from '@ngrx/store'
import { SubscriptionsState } from '../../interfaces/subscription.interface'
import { subscriptionsActions } from './subscriptions-actions.store'

const initialState: SubscriptionsState = {
  success: false,
}

export const subscriptionsReducers = createReducer(
  initialState,
  on(subscriptionsActions.findByCode, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subscriptionsActions.findByCodeSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
    }
  }),
  on(subscriptionsActions.findByOrganization, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subscriptionsActions.findByOrganizationSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
    }
  }),
  on(subscriptionsActions.findMany, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subscriptionsActions.findManySucceeded, (state, action) => {
    return {
      ...state,
      count: action.payload.length,
      many: action.payload,
      success: true,
    }
  }),
  on(subscriptionsActions.findOne, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subscriptionsActions.findOneSucceeded, (state, action) => {
    return {
      ...state,
      one: action.payload,
      success: true,
    }
  }),
  on(subscriptionsActions.remove, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subscriptionsActions.removeSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
  on(subscriptionsActions.update, (state, action) => {
    return {
      ...state,
    }
  }),
  on(subscriptionsActions.updateSucceeded, (state, action) => {
    return {
      ...state,
      message: action.message,
      success: true,
    }
  }),
)
