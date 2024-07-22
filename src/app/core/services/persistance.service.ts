import { Injectable } from '@angular/core'
import { AuthPayload } from '../interfaces/auth.interface'

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  destroyToken(key: string): any {
    try {
      if (typeof localStorage !== 'undefined') localStorage.removeItem(key)
      return null
    } catch (error) {
      console.error(error)
    }
  }

  getToken(key: string): AuthPayload | undefined {
    try {
      if (typeof localStorage !== 'undefined') {
        const item: any = localStorage.getItem(key)
        if (item == null) return undefined

        const token: AuthPayload = JSON.parse(atob(item))
        if (!token) return undefined
        return token
      }
      return undefined
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  setToken(key: string, payload: any): void {
    try {
      if (typeof localStorage !== 'undefined')
        return localStorage.setItem(key, btoa(JSON.stringify(payload)))
    } catch (error) {
      console.error(error)
    }
  }
}
