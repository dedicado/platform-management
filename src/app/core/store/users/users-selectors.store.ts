import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UsersState } from '../../interfaces/user.interface'

const featureSelector = createFeatureSelector<UsersState>('users')

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

export const usersSelectors = { count, findMany, findOne, message }
