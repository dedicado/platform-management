import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AccountsService } from '../../services/accounts.service'
import { map, switchMap } from 'rxjs'
import { accountsActions } from './accounts-actions'

export const findAllAccountsEffect = createEffect(
  (actions$ = inject(Actions), accountsService = inject(AccountsService)) => {
    return actions$.pipe(
      ofType(accountsActions.findAll),
      switchMap(() =>
        accountsService
          .findAll()
          .pipe(map((data) => accountsActions.findAllSucceeded({ data }))),
      ),
    )
  },
  { functional: true },
)

export const findOneAccountEffect = createEffect(
  (actions$ = inject(Actions), accountsService = inject(AccountsService)) => {
    return actions$.pipe(
      ofType(accountsActions.findOne),
      switchMap((action) =>
        accountsService
          .findOne(action.id)
          .pipe(map((data) => accountsActions.findOneSucceeded({ data }))),
      ),
    )
  },
  { functional: true },
)

export const accountsEffects = {
  findAllAccountsEffect,
  findOneAccountEffect
}
