import { MainInterface } from './core.interface'

export interface Information extends MainInterface {
  name: string
  image?: string
  email?: string
  phone: string
  document?: string
}
