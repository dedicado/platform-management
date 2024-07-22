export interface AuthLogin {
  phone: string
  code: string
}

export interface AuthPayload {
  expiresIn: number
  id: string
  token: string
}

export interface AuthState {
  error?: string | undefined
  isAuthenticated: boolean
  message?: string | undefined
  payload?: AuthPayload
  success: boolean
}
