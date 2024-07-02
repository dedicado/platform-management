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
        return token
      }
      return undefined
    } catch (error) {
      console.error(error)
      return null
    }
  }

  setToken(key: string, payload: any): void {
    console.log(payload)
    try {
      if (typeof localStorage !== 'undefined')
        return localStorage.setItem(key, btoa(JSON.stringify(payload.token)))
    } catch (error) {
      console.error(error)
    }
  }
}
