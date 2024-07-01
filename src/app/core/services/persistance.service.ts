import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  destroyToken(key: string): void {
    try {
      if (typeof localStorage !== 'undefined')
        return localStorage.removeItem(key)
    } catch (error) {
      console.error(error)
    }
  }

  getToken(key: string): unknown {
    try {
      if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem(key)
        if (!token) return null

        const { exp }: any = JSON.parse(atob(token.split('.')[1] ?? '') || '')
        if (!exp) {
          localStorage.removeItem(key)
          return null
        }

        const dateTime = new Date().getTime()
        if (exp < dateTime) return token
      }
      return undefined
    } catch (error) {
      console.error(error)
      return null
    }
  }

  setToken(key: string, data: unknown): void {
    try {
      if (typeof localStorage !== 'undefined')
        return localStorage.setItem(key, btoa(JSON.stringify(data)))
    } catch (error) {
      console.error(error)
    }
  }
}
