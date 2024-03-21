'use server'

import { getUserByDocument } from '@/app/main/users/actions'
import { nextAuthOptions } from '@/libraries/next-auth'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import { getAddressByZipCode } from '@/utils/handle-address'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import {
  OrderCreateValidation,
  OrderCreateValidationType,
  OrderLocationValidation,
  OrderLocationValidationType,
} from '@/validations/order'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export const getOrderByCode = async (
  code: string,
): Promise<OrderType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORDER_API_URL}/orders/code/${code}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrderById = async (id: string): Promise<OrderType | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(`${process.env.ORDER_API_URL}/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: session?.user?.authorizationKey!,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrders = async (): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(`${process.env.ORDER_API_URL}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizationKey: session?.user?.authorizationKey!,
      },
    })
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrdersByCustomer = async (
  customer: string,
): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORDER_API_URL}/orders/customer/${customer}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrdersByDocument = async (
  document: string,
): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORDER_API_URL}/orders/organization/${document}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrdersByMember = async (): Promise<OrderType[] | any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    const data = await fetch(
      `${process.env.ORDER_API_URL}/orders/member/${session?.user?.phone}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      },
    )
    return data && (await data.json())
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const registerOrderLocation = async (
  inputs: OrderLocationValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (await OrderLocationValidation.parseAsync(inputs)) {
      const data = await fetch(`${process.env.LOG_API_URL}/order-locations`, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      })
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const createOrder = async (
  inputs: OrderCreateValidationType,
): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  try {
    if (await OrderCreateValidation.parseAsync(inputs)) {
      const customer: UserType | any = await getUserByDocument(inputs?.customer)
      if (customer?.response?.error) return customer

      const address: AddressTypeByZipCode | any = await getAddressByZipCode(
        customer?.zipCode,
      )

      const data = await fetch(`${process.env.ORDER_API_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify({
          ...inputs,
          destinationZipCode: customer?.zipCode || address.cep,
          destinationLatitude: customer?.latitude || address?.lat,
          destinationLongitude: customer?.longitude || address?.lng,
        }),
        headers: {
          'Content-Type': 'application/json',
          authorizationKey: session?.user?.authorizationKey!,
        },
      })
      revalidatePath(`/${inputs.organization}/pedidos`)
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
