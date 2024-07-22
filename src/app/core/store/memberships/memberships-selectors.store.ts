import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MembershipsState } from '../../interfaces/membership.interface'

const featureSelector = createFeatureSelector<MembershipsState>('memberships')

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

export const membershipsSelectors = { count, findMany, findOne, message }
