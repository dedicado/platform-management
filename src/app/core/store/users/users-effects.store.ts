import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UsersService } from '../../services/users.service'
import { usersActions } from './users-actions.store'
import { map, switchMap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersEffectsStore {
  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService,
  ) {}

  create = createEffect(() => {
    return this.actions$.pipe(
      ofType(usersActions.create),
      switchMap((action) =>
        this.usersService
          .create(action.createUser)
          .pipe(map((message) => usersActions.createSucceeded({ message }))),
      ),
    )
  })

  findMany = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(usersActions.findMany),
        switchMap(() =>
          this.usersService
            .findMany()
            .pipe(
              map((payload) => usersActions.findManySucceeded({ payload })),
            ),
        ),
      )
    },
    { functional: true },
  )

  findMe = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(usersActions.findMe),
        switchMap(() =>
          this.usersService
            .findMe()
            .pipe(map((payload) => usersActions.findMeSucceeded({ payload }))),
        ),
      )
    },
    { functional: true },
  )

  findOne = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(usersActions.findOne),
        switchMap((action) =>
          this.usersService
            .findOne(action.id)
            .pipe(map((payload) => usersActions.findOneSucceeded({ payload }))),
        ),
      )
    },
    { functional: true },
  )

  remove = createEffect(() => {
    return this.actions$.pipe(
      ofType(usersActions.remove),
      switchMap((action) =>
        this.usersService
          .remove(action.id, action.removeData)
          .pipe(map((message) => usersActions.removeSucceeded({ message }))),
      ),
    )
  })

  update = createEffect(() => {
    return this.actions$.pipe(
      ofType(usersActions.update),
      switchMap((action) =>
        this.usersService
          .update(action.id, action.updateUser)
          .pipe(map((message) => usersActions.updateSucceeded({ message }))),
      ),
    )
  })
}
