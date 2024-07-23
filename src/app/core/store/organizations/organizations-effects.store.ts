import { Actions, createEffect, ofType } from '@ngrx/effects'
import { OrganizationsService } from '../../services/organizations.service'
import { inject, Injectable } from '@angular/core'
import { organizationsActions } from './organizations-actions.store'
import { map, switchMap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class OrganizationsEffectsStore {
  constructor(
    private readonly actions$: Actions,
    private readonly organizationsService: OrganizationsService,
  ) {}

  create = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationsActions.create),
        switchMap((action) =>
          this.organizationsService
            .create(action.createOrganization)
            .pipe(
              map((message) =>
                organizationsActions.createSucceeded({ message }),
              ),
            ),
        ),
      )
    },
    { functional: true },
  )

  createForUser = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationsActions.createForUser),
        switchMap((action) =>
          this.organizationsService
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

  findByDocument = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationsActions.findByDocument),
        switchMap((action) =>
          this.organizationsService
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

  findMany = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationsActions.findMany),
        switchMap(() =>
          this.organizationsService
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

  findOne = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationsActions.findOne),
        switchMap((action) =>
          this.organizationsService
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

  remove = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(organizationsActions.remove),
        switchMap((action) =>
          this.organizationsService
            .remove(action.id, action.removeData)
            .pipe(
              map((message) =>
                organizationsActions.removeSucceeded({ message }),
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
        ofType(organizationsActions.update),
        switchMap((action) =>
          this.organizationsService
            .update(action.id, action.updateOrganization)
            .pipe(
              map((message) =>
                organizationsActions.updateSucceeded({ message }),
              ),
            ),
        ),
      )
    },
    { functional: true },
  )
}
