import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MemberState } from '../../interfaces/state.interface'

const featureSelector = createFeatureSelector<MemberState>('articles')

const findAll = createSelector(featureSelector, (state) => {
  return state.members
})

export const membersSelectors = { findAll }
