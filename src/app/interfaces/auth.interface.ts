export interface AuthPayloadInterface {
  token: string
}

export interface LoginInterface {
  phone: string
  authCode: string
}

export interface RecoverPasswordInterface {
  phone: string
  email: string
}
