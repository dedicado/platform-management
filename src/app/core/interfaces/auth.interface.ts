export interface AuthLogin {
  phone: string
  code: string
}

export interface AuthPayload {
  expiredIn: number
  token: string
}

export interface AuthCallback {
  readonly payload: AuthPayload
}
