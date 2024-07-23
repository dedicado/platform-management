import { Actions, createEffect, ofType } from '@ngrx/effects'
import { SubscriptionsService } from '../../services/subscriptions.service'
import { inject, Injectable } from '@angular/core'
import { subscriptionsActions } from './subscriptions-actions.store'
import { map, switchMap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsEffectsStore {
  constructor(
    private readonly actions$: Actions,
    private readonly subscriptionsService: SubscriptionsService,
  ) {}

  findByCode = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(subscriptionsActions.findByCode),
        switchMap((action) =>
          this.subscriptionsService
            .findByCode(action.code)
            .pipe(
              map((payload) =>
                subscriptionsActions.findByCodeSucceeded({ payload }),
              ),
            ),
        ),
      )
    },
    { functional: true },
  )

  findByOrganization = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(subscriptionsActions.findByOrganization),
        switchMap((action) =>
          this.subscriptionsService
            .findByOrganization(action.document)
            .pipe(
              map((payload) =>
                subscriptionsActions.findByOrganizationSucceeded({ payload }),
              ),
            ),
        ),
      )
    },
    { functional: true },
  )

  findMany = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(subscriptionsActions.findMany),
        switchMap(() =>
          this.subscriptionsService
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

  findOne = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(subscriptionsActions.findOne),
        switchMap((action) =>
          this.subscriptionsService
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

  remove = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(subscriptionsActions.remove),
        switchMap((action) =>
          this.subscriptionsService
            .remove(action.id, action.removeData)
            .pipe(
              map((message) =>
                subscriptionsActions.removeSucceeded({ message }),
              ),
            ),
        ),
      )
    },
    { functional: true },
  )

  update = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(subscriptionsActions.update),
        switchMap((action) =>
          this.subscriptionsService
            .update(action.id, action.updateSubscription)
            .pipe(
              map((message) =>
                subscriptionsActions.updateSucceeded({ message }),
              ),
            ),
        ),
      )
    },
    { functional: true },
  )
}
