'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ITEM_REPOSITORY } from '..'
import { ItemType } from '@/types/order'

export const itemRepositoryFindMany = async (): Promise<ItemType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ITEM_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['items'],
        revalidate: 3600,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const itemRepositoryFindById = async (
  id: string,
): Promise<ItemType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''
  const authorizationKey = session?.user?.authorizationKey ?? ''

  try {
    const data = await fetch(`${ITEM_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: authorizationKey,
      },
      next: {
        tags: ['item'],
        revalidate: 3600,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
