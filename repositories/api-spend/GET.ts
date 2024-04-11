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

  return await fetch(`${API_SPEND_REPOSITORY}`, {
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
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}

export const apiSpendRepositoryFindByKey = async (
  key: string,
): Promise<ApiSpendType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  return await fetch(`${API_SPEND_REPOSITORY}/key/${key}`, {
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
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}

export const apiSpendRepositoryFindById = async (
  id: string,
): Promise<ApiSpendType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  return await fetch(`${API_SPEND_REPOSITORY}/${id}`, {
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
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}
