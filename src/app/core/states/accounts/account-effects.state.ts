import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AccountsService } from '../../services/accounts.service'
import { map, switchMap } from 'rxjs'
import { accountActions } from './account-actions.state'

export const findAllAccountsEffect = createEffect(
  (actions$ = inject(Actions), accountsService = inject(AccountsService)) => {
    return actions$.pipe(
      ofType(accountActions.findAll),
      switchMap(() =>
        accountsService
          .findAll()
          .pipe(map((data) => accountActions.findAllSucceeded({ data }))),
      ),
    )
  },
  { functional: true },
)

export const findOneAccountEffect = createEffect(
  (actions$ = inject(Actions), accountsService = inject(AccountsService)) => {
    return actions$.pipe(
      ofType(accountActions.findOne),
      switchMap((action) =>
        accountsService
          .findOne(action.id)
          .pipe(map((data) => accountActions.findOneSucceeded({ data }))),
      ),
    )
  },
  { functional: true },
)

export const accountEffects = {
  findAllAccountsEffect,
}
