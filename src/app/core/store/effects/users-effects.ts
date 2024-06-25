import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { UsersService } from '../../services/users.service'
import { map, switchMap } from 'rxjs'
import { usersActions } from '../actions/users-actions'

const create = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.create),
      switchMap((action) =>
        usersService
          .create(action.inputs)
          .pipe(map((payload) => usersActions.createSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const findAll = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.findAll),
      switchMap(() =>
        usersService
          .findAll()
          .pipe(map((payload) => usersActions.findAllSucceeded({ payload }))),
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

const update = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersService)) => {
    return actions$.pipe(
      ofType(usersActions.update),
      switchMap((action) =>
        usersService
          .update(action.id, action.data)
          .pipe(map((payload) => usersActions.updateSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

export const usersEffects = { create, findAll, findOne, update }
