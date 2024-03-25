'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { NOTE_REPOSITORY } from '..'
import {
  CreateNoteValidation,
  CreateNoteValidationType,
} from '@/validations/note'

export const noteRepositoryCreate = async (
  inputs: CreateNoteValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    if (await CreateNoteValidation.parseAsync(inputs)) {
      const data = await fetch(`${NOTE_REPOSITORY}`, {
        method: 'POST',
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
