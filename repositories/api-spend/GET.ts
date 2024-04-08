'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { ApiSpendType } from '@/types/api-spend'
import { getServerSession } from 'next-auth'
import { API_SPEND_REPOSITORY } from '..'

export const apiSpendRepositoryFindMany = async (): Promise<
  ApiSpendType[] | any
> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    const data = await fetch(`${API_SPEND_REPOSITORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      next: {
        tags: ['apiSpends'],
        revalidate: 3600,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const apiSpendRepositoryFindByKey = async (
  key: string,
): Promise<ApiSpendType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    const data = await fetch(`${API_SPEND_REPOSITORY}/key/${key}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      next: {
        tags: ['apiSpend'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}

export const apiSpendRepositoryFindById = async (
  id: string,
): Promise<ApiSpendType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  try {
    const data = await fetch(`${API_SPEND_REPOSITORY}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      next: {
        tags: ['apiSpend'],
        revalidate: 120,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || error
  }
}
