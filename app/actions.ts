'use server'

import {
  CreateLastLocationValidation,
  CreateLastLocationValidationType,
} from '@/validations/last-location'
import { getServerSession } from 'next-auth/next'
import { nextAuthOptions } from '@/libraries/next-auth'
import { revalidatePath } from 'next/cache'

export const registerLocation = async (
  inputs: CreateLastLocationValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (await CreateLastLocationValidation.parseAsync(inputs)) {
      const data = await fetch(`${process.env.USER_API_URL}/last-locations`, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.authorization}`,
        },
      })
      //console.log('registerLocation: ', await data.json())
      revalidatePath('/')
      return data && (await data.json())
    }
  } catch (error: any) {
    //console.log('registerLocation: ', error)
    return error?.message || 'ocorreu um erro inesperado'
  }
}
