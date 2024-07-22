import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UsersService } from '../../services/users.service'
import { usersActions } from './users-actions.store'
import { map, switchMap } from 'rxjs'

const create = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.create),
      switchMap((action) =>
        usersService
          .create(action.createUser)
          .pipe(map((message) => usersActions.createSucceeded({ message }))),
      ),
    )
  },
)

const findMany = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.findMany),
      switchMap(() =>
        usersService
          .findMany()
          .pipe(map((payload) => usersActions.findManySucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const findMe = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.findMe),
      switchMap(() =>
        usersService
          .findMe()
          .pipe(map((payload) => usersActions.findMeSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const findOne = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.findOne),
      switchMap((action) =>
        usersService
          .findOne(action.id)
          .pipe(map((payload) => usersActions.findOneSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const remove = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.remove),
      switchMap((action) =>
        usersService
          .remove(action.id, action.removeData)
          .pipe(map((message) => usersActions.removeSucceeded({ message }))),
      ),
    )
  },
)

const update = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.update),
      switchMap((action) =>
        usersService
          .update(action.id, action.updateUser)
          .pipe(map((message) => usersActions.updateSucceeded({ message }))),
      ),
    )
  },
)

export const usersEffects = {
  create,
  findMany,
  findMe,
  findOne,
  remove,
  update,
}
