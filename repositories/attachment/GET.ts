'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ATTACHMENT_REPOSITORY } from '..'
import { AttachmentType } from '@/types/order'

export const attachmentRepositoryFindMany = async (): Promise<
  AttachmentType[] | any
> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    const data = await fetch(`${ATTACHMENT_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['attachments'],
        revalidate: 3600,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const attachmentRepositoryFindById = async (
  id: string,
): Promise<AttachmentType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    const data = await fetch(`${ATTACHMENT_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['attachment'],
        revalidate: 3600,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
