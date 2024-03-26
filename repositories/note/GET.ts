'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { NOTE_REPOSITORY } from '..'
import { NoteType } from '@/types/order'

export const noteRepositoryFindMany = async (): Promise<NoteType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${NOTE_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['notes'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const noteRepositoryFindById = async (
  id: string,
): Promise<NoteType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${NOTE_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['note', 'noteId'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
