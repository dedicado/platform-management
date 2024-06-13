export interface Authenticate {
  phone: string
  code: string
}

export interface AuthCallback {
  readonly expiredIn: number
  readonly token: string
}
