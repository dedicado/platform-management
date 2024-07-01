import { inject } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthService } from '../../services/auth.service'
import { authActions } from '../actions/auth-actions'
import { map, switchMap, tap } from 'rxjs'
import { Router } from '@angular/router'
import { PersistanceService } from '../../services/persistance.service'

const authentication = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceServe = inject(PersistanceService),
  ) => {
    return actions$.pipe(
      ofType(authActions.authentication),
      switchMap((action) => {
        return authService.authentication(action.inputs).pipe(
          map((payload) => {
            persistanceServe.setToken('AUTH_TOKEN', payload.payload.token)
            return authActions.authenticationSucceeded(payload)
          }),
        )
      }),
    )
  },
  { functional: true },
)

const redirect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.authenticationSucceeded),
      tap(() => {
        router.navigateByUrl('/')
      }),
    )
  },
  { functional: true, dispatch: false },
)

const validation = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.validation),
      switchMap((action) => {
        return authService
          .validation(action)
          .pipe(map((payload) => authActions.validationSucceeded({ payload })))
      }),
    )
  },
  { functional: true },
)

export const authEffects = { authentication, redirect, validation }
