import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SubscriptionsState } from '../../interfaces/subscription.interface'

const featureSelector =
  createFeatureSelector<SubscriptionsState>('subscriptions')

const count = createSelector(featureSelector, (state) => {
  return state.count
})

const findMany = createSelector(featureSelector, (state) => {
  return state.many
})

const findOne = createSelector(featureSelector, (state) => {
  return state.one
})

const message = createSelector(featureSelector, (state) => {
  return state.message
})

export const subscriptionsSelectors = { count, findMany, findOne, message }
