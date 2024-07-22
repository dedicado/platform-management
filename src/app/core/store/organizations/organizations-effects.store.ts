import { Actions, createEffect, ofType } from '@ngrx/effects'
import { OrganizationsService } from '../../services/organizations.service'
import { inject } from '@angular/core'
import { organizationsActions } from './organizations-actions.store'
import { map, switchMap } from 'rxjs'

const create = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.create),
      switchMap((action) =>
        organizationsService
          .create(action.createOrganization)
          .pipe(
            map((message) => organizationsActions.createSucceeded({ message })),
          ),
      ),
    )
  },
  { functional: true },
)

const createForUser = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.createForUser),
      switchMap((action) =>
        organizationsService
          .createForUser(action.phone, action.createOrganization)
          .pipe(
            map((message) =>
              organizationsActions.createForUserSucceeded({ message }),
            ),
          ),
      ),
    )
  },
  { functional: true },
)

const findByDocument = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.findByDocument),
      switchMap((action) =>
        organizationsService
          .findByDocument(action.document)
          .pipe(
            map((payload) =>
              organizationsActions.findByDocumentSucceeded({ payload }),
            ),
          ),
      ),
    )
  },
  { functional: true },
)

const findMany = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.findMany),
      switchMap(() =>
        organizationsService
          .findMany()
          .pipe(
            map((payload) =>
              organizationsActions.findManySucceeded({ payload }),
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

const remove = createEffect(
  (
    actions$ = inject(Actions),
    organizationsService = inject(OrganizationsService),
  ) => {
    return actions$.pipe(
      ofType(organizationsActions.remove),
      switchMap((action) =>
        organizationsService
          .remove(action.id, action.removeData)
          .pipe(
            map((message) => organizationsActions.removeSucceeded({ message })),
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
          .update(action.id, action.updateOrganization)
          .pipe(
            map((message) => organizationsActions.updateSucceeded({ message })),
          ),
      ),
    )
  },
  { functional: true },
)

export const organizationsEffects = {
  create,
  createForUser,
  findByDocument,
  findMany,
  findOne,
  remove,
  update,
}
