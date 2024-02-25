import { env } from '@/environments'
import { ItemType } from '@/types/item'

export const getItems = async (): Promise<ItemType[] | any> => {
  try {
    const data = await fetch(`${env.ORDERS_API_URL}/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const getItemById = async (id: string) => {
  try {
    const data = await fetch(`${env.ORDERS_API_URL}/items/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const getItemByCode = async (code: string) => {
  try {
    const data = await fetch(`${env.ORDERS_API_URL}/items/code/${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}