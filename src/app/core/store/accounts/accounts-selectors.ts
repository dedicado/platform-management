import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AccountState } from '../../interfaces/state.interface'

const accountState = createFeatureSelector<AccountState>('accounts')

const selectAllAccounts = createSelector(accountState, (state) => {
  return state.accounts
})

export const accountsSelectors = {
  selectAllAccounts,
}
