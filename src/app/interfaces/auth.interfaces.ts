export interface AuthCallbackInterface {
  token?: string
  expiresIn?: number
}

export interface AuthLoginInterface {
  phone: string
  code: string
}
