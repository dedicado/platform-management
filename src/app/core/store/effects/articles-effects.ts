import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, switchMap } from 'rxjs'
import { articlesActions } from '../actions/articles-actions'
import { ArticlesService } from '../../services/articles.service'

const create = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) => {
    return actions$.pipe(
      ofType(articlesActions.create),
      switchMap((action) =>
        articlesService
          .create(action.inputs)
          .pipe(map((payload) => articlesActions.createSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

const findAll = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) => {
    return actions$.pipe(
      ofType(articlesActions.findAll),
      switchMap(() =>
        articlesService
          .findAll()
          .pipe(
            map((payload) => articlesActions.findAllSucceeded({ payload })),
          ),
      ),
    )
  },
  { functional: true },
)

const findOne = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) => {
    return actions$.pipe(
      ofType(articlesActions.findOne),
      switchMap((action) =>
        articlesService
          .findOne(action.id)
          .pipe(
            map((payload) => articlesActions.findOneSucceeded({ payload })),
          ),
      ),
    )
  },
  { functional: true },
)

const update = createEffect(
  (actions$ = inject(Actions), articlesService = inject(ArticlesService)) => {
    return actions$.pipe(
      ofType(articlesActions.update),
      switchMap((action) =>
        articlesService
          .update(action.id, action.data)
          .pipe(map((payload) => articlesActions.updateSucceeded({ payload }))),
      ),
    )
  },
  { functional: true },
)

export const articlesEffects = { create, findAll, findOne, update }
