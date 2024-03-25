'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ORDER_REPOSITORY } from '..'
import {
  OrderUpdateValidation,
  OrderUpdateValidationType,
} from '@/validations/order'

export const orderRepositoryUpdate = async (
  id: string,
  inputs: OrderUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    if (await OrderUpdateValidation.parseAsync(inputs)) {
      const data = await fetch(`${ORDER_REPOSITORY}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: authorizationKey,
        },
      })
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || error
  }
}