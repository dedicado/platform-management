import { Actions, createEffect, ofType } from '@ngrx/effects'
import { MembershipsService } from '../../services/memberships.service'
import { inject } from '@angular/core'
import { map, switchMap } from 'rxjs'
import { membershipsActions } from './memberships-actions.store'

const findMany = createEffect(
  (
    actions$ = inject(Actions),
    membershipsService = inject(MembershipsService),
  ) => {
    return actions$.pipe(
      ofType(membershipsActions.findMany),
      switchMap(() =>
        membershipsService
          .findMany()
          .pipe(
            map((payload) => membershipsActions.findManySucceeded({ payload })),
          ),
      ),
    )
  },
  { functional: true },
)

const findOne = createEffect(
  (
    actions$ = inject(Actions),
    membershipsService = inject(MembershipsService),
  ) => {
    return actions$.pipe(
      ofType(membershipsActions.findOne),
      switchMap((action) =>
        membershipsService
          .findOne(action.id)
          .pipe(
            map((payload) => membershipsActions.findOneSucceeded({ payload })),
          ),
      ),
    )
  },
  { functional: true },
)

export const membershipsEffects = { findMany, findOne }
