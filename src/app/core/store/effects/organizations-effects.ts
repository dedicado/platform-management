import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, switchMap } from 'rxjs'
import { organizationsActions } from '../actions/organizations-actions'
import { OrganizationsService } from '../../services/organizations.service'

const create = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.create),
      switchMap((action) =>
        organizationsService
          .create(action.inputs)
          .pipe(
            map((payload) => organizationsActions.createSucceeded({ payload })),
          ),
      ),
    )
  },
  { functional: true },
)

const findAll = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.findAll),
      switchMap(() =>
        organizationsService
          .findAll()
          .pipe(
            map((payload) =>
              organizationsActions.findAllSucceeded({ payload }),
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
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.findOne),
      switchMap((action) =>
        organizationsService
          .findOne(action.id)
          .pipe(
            map((payload) =>
              organizationsActions.findOneSucceeded({ payload }),
            ),
          ),
      ),
    )
  },
  { functional: true },
)

const update = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.update),
      switchMap((action) =>
        organizationsService
          .update(action.id, action.data)
          .pipe(
            map((payload) => organizationsActions.updateSucceeded({ payload })),
          ),
      ),
    )
  },
  { functional: true },
)

export const organizationsEffects = { create, findAll, findOne, update }
