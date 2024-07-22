import { Actions, createEffect, ofType } from '@ngrx/effects'
import { OrganizationsService } from '../../services/organizations.service'
import { inject } from '@angular/core'
import { organizationsActions } from './organizations-actions.store'
import { map, switchMap } from 'rxjs'

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

export const organizationsEffects = { findByDocument, findMany, findOne }
