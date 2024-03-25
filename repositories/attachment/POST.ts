'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'

export const attachmentRepositoryCreate = async (inputs: any): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization
  const authorizationKey = session?.user?.authorizationKey

  try {
    if (inputs) {
    }
  } catch (error: any) {
    return error?.message || error
  }
}
