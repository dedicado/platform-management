import { env } from '@/environments'

export const deleteItem = async (id: string): Promise<any> => {
  try {
    const data = await fetch(`${env.ORDERS_API_URL}/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const softDeleteItem = async (id: string): Promise<any> => {
  try {
    const data = await fetch(`${env.ORDERS_API_URL}/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ softDeleted: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}