import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AccountState } from '../../interfaces/state.interface'

const accountState = createFeatureSelector<AccountState>('accounts')

export const accountsListSelector = createSelector(accountState, (state) => {
  return state.accounts
})
