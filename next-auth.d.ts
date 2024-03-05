import 'next-auth/jwt'
import { DefaultSession } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    id: string
    authorizationKey: string
    active: boolean
    profile: string
    phone: string
    authorization?: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string
      authorizationKey: string
      active: boolean
      profile: string
      phone: string
      authorization?: string
    } & DefaultSession['user']
  }

  interface User {
    id: string
    authorizationKey: string
    active: boolean
    profile: string
    phone: string
    authorization?: string
  }
}
