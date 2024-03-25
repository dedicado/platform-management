'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ATTACHMENT_REPOSITORY } from '..'
import {
  CreateAttachmentValidation,
  CreateAttachmentValidationType,
} from '@/validations/attachment'

export const attachmentRepositoryCreate = async (
  inputs: CreateAttachmentValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    if (await CreateAttachmentValidation.parseAsync(inputs)) {
      const data = await fetch(`${ATTACHMENT_REPOSITORY}`, {
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
