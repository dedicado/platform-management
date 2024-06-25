import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, switchMap } from 'rxjs'
import { membersActions } from '../actions/members-actions'
import { MembersService } from '../../services/members.service'

const create = createEffect(
  (actions$ = inject(Actions), membersService = inject(MembersService)) => {
    return actions$.pipe(
      ofType(membersActions.create),
      switchMap((action) =>
        membersService
          .create(action.inputs)
          .pipe(map((payload) => membersActions.createSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const findAll = createEffect(
  (actions$ = inject(Actions), membersService = inject(MembersService)) => {
    return actions$.pipe(
      ofType(membersActions.findAll),
      switchMap(() =>
        membersService
          .findAll()
          .pipe(map((payload) => membersActions.findAllSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const findOne = createEffect(
  (actions$ = inject(Actions), membersService = inject(MembersService)) => {
    return actions$.pipe(
      ofType(membersActions.findOne),
      switchMap((action) =>
        membersService
          .findOne(action.id)
          .pipe(map((payload) => membersActions.findOneSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const update = createEffect(
  (actions$ = inject(Actions), membersService = inject(MembersService)) => {
    return actions$.pipe(
      ofType(membersActions.update),
      switchMap((action) =>
        membersService
          .update(action.id, action.data)
          .pipe(map((payload) => membersActions.updateSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

export const membersEffects = { create, findAll, findOne, update }
