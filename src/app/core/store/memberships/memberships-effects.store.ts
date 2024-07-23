import { Actions, createEffect, ofType } from '@ngrx/effects'
import { MembershipsService } from '../../services/memberships.service'
import { inject, Injectable } from '@angular/core'
import { map, switchMap } from 'rxjs'
import { membershipsActions } from './memberships-actions.store'

@Injectable({
  providedIn: 'root',
})
export class MembershipsEffectsStore {
  constructor(
    private readonly actions$: Actions,
    private readonly membershipsService: MembershipsService,
  ) {}

  create = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(membershipsActions.create),
        switchMap((action) =>
          this.membershipsService
            .create(action.createMembership)
            .pipe(
              map((message) => membershipsActions.createSucceeded({ message })),
            ),
        ),
      )
    },
    { functional: true },
  )

  findByUser = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(membershipsActions.findByUser),
        switchMap((action) =>
          this.membershipsService
            .findByUser(action.userId)
            .pipe(
              map((payload) =>
                membershipsActions.findByUserSucceeded({ payload }),
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
        ofType(membershipsActions.findMany),
        switchMap(() =>
          this.membershipsService
            .findMany()
            .pipe(
              map((payload) =>
                membershipsActions.findManySucceeded({ payload }),
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
        ofType(membershipsActions.findOne),
        switchMap((action) =>
          this.membershipsService
            .findOne(action.id)
            .pipe(
              map((payload) =>
                membershipsActions.findOneSucceeded({ payload }),
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
        ofType(membershipsActions.remove),
        switchMap((action) =>
          this.membershipsService
            .remove(action.id, action.removeData)
            .pipe(
              map((message) => membershipsActions.removeSucceeded({ message })),
            ),
        ),
      )
    },
    { functional: true },
  )

  update = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(membershipsActions.update),
        switchMap((action) =>
          this.membershipsService
            .update(action.id, action.updateMembership)
            .pipe(
              map((message) => membershipsActions.updateSucceeded({ message })),
            ),
        ),
      )
    },
    { functional: true },
  )
}
