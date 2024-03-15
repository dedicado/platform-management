'use server'

import { getServerSession } from 'next-auth/next'
import { nextAuthOptions } from '@/libraries/next-auth'
import { revalidatePath } from 'next/cache'
import {
  ProfileLocationUpdateValidation,
  ProfileLocationUpdateValidationType,
} from '@/validations/profile'

export const registerLocation = async (
  inputs: ProfileLocationUpdateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (await ProfileLocationUpdateValidation.parseAsync(inputs)) {
      const data = await fetch(
        `${process.env.USER_API_URL}/users/${session?.user?.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(inputs),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.authorization}`,
          },
        },
      )
      //console.log('registerLocation: ', await data.json())
      revalidatePath('/')
      return data && (await data.json())
    }
  } catch (error: any) {
    //console.log('registerLocation: ', error)
    return error?.message || 'ocorreu um erro inesperado'
  }
}
