export interface AuthCallback {
  token?: string
  expiresIn?: number
}

export interface AuthLogin {
  phone: string
  code: string
}
