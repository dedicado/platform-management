'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { getServerSession } from 'next-auth'
import { ORDER_LOCATION_REPOSITORY } from '..'
import { OrderLocationType } from '@/types/order'

export const orderLocationRepositoryFindMany = async (): Promise<
  OrderLocationType[] | any
> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  return await fetch(`${ORDER_LOCATION_REPOSITORY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    next: {
      tags: ['orderLocations'],
      revalidate: 3600,
    },
  })
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}

export const orderLocationRepositoryFindByCode = async (
  code: string,
): Promise<OrderLocationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  return await fetch(`${ORDER_LOCATION_REPOSITORY}/code/${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    next: {
      tags: ['orderLocation'],
      revalidate: 120,
    },
  })
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}

export const orderLocationRepositoryFindById = async (
  id: string,
): Promise<OrderLocationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const authorization = session?.user?.authorization ?? ''

  return await fetch(`${ORDER_LOCATION_REPOSITORY}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    next: {
      tags: ['orderLocation'],
      revalidate: 120,
    },
  })
    .then(async (data) => await data.json())
    .catch((error: any) => error?.message)
}
