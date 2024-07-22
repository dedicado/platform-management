import { Actions, createEffect, ofType } from '@ngrx/effects'
import { SubscriptionsService } from '../../services/subscriptions.service'
import { inject } from '@angular/core'
import { subscriptionsActions } from './subscriptions-actions.store'
import { map, switchMap } from 'rxjs'

const findMany = createEffect(
  (
    actions$ = inject(Actions),
    subscriptionsService = inject(SubscriptionsService),
  ) => {
    return actions$.pipe(
      ofType(subscriptionsActions.findMany),
      switchMap(() =>
        subscriptionsService
          .findMany()
          .pipe(
            map((payload) =>
              subscriptionsActions.findManySucceeded({ payload }),
            ),
          ),
      ),
    )
  },
  { functional: true },
)

const findOne = createEffect(
  (
    actions$ = inject(Actions),
    subscriptionsService = inject(SubscriptionsService),
  ) => {
    return actions$.pipe(
      ofType(subscriptionsActions.findOne),
      switchMap((action) =>
        subscriptionsService
          .findOne(action.id)
          .pipe(
            map((payload) =>
              subscriptionsActions.findOneSucceeded({ payload }),
            ),
          ),
      ),
    )
  },
  { functional: true },
)

export const subscriptionsEffects = { findMany, findOne }
