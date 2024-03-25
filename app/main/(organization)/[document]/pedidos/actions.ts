'use server'

import { orderLocationRepositoryCreate } from '@/repositories/order-location/POST'
import {
  orderRepositoryFindByCode,
  orderRepositoryFindByCustomer,
  orderRepositoryFindById,
  orderRepositoryFindByMember,
  orderRepositoryFindByOrganization,
  orderRepositoryFindMany,
} from '@/repositories/order/GET'
import { orderRepositoryCreate } from '@/repositories/order/POST'
import { userRepositoryFindByDocument } from '@/repositories/user/GET'
import { OrderType } from '@/types/order'
import { UserType } from '@/types/user'
import { getAddressByZipCode } from '@/utils/handle-address'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import {
  OrderCreateValidation,
  OrderCreateValidationType,
  OrderLocationValidationType,
} from '@/validations/order'
import { revalidatePath } from 'next/cache'

export const createOrder = async (
  inputs: OrderCreateValidationType,
): Promise<any> => {
  try {
    if (await OrderCreateValidation.parseAsync(inputs)) {
      const customer: UserType | any = await userRepositoryFindByDocument(
        inputs?.customer,
      )
      if (customer?.response?.error) return customer

      const address: AddressTypeByZipCode | any = await getAddressByZipCode(
        customer?.zipCode,
      )

      revalidatePath(`/${inputs.organization}/pedidos`)
      return await orderRepositoryCreate({
        ...inputs,
        destinationZipCode: customer?.zipCode || address.cep,
        destinationLatitude: customer?.latitude || address?.lat,
        destinationLongitude: customer?.longitude || address?.lng,
      }).then((data: any) => {
        revalidatePath(`/${inputs?.organization}/pedidos`)
        return data
      })
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getOrderByCode = async (
  code: string,
): Promise<OrderType | any> => {
  return await orderRepositoryFindByCode(code)
}

export const getOrderById = async (id: string): Promise<OrderType | any> => {
  return await orderRepositoryFindById(id)
}

export const getOrders = async (): Promise<OrderType[] | any> => {
  return await orderRepositoryFindMany()
}

export const getOrdersByCustomer = async (
  customer: string,
): Promise<OrderType[] | any> => {
  return await orderRepositoryFindByCustomer(customer)
}

export const getOrdersByOrganization = async (
  document: string,
): Promise<OrderType[] | any> => {
  return await orderRepositoryFindByOrganization(document)
}

export const getOrdersByMember = async (
  phone: string,
): Promise<OrderType[] | any> => {
  return await orderRepositoryFindByMember(phone)
}

export const registerOrderLocation = async (
  inputs: OrderLocationValidationType,
): Promise<any> => {
  return await orderLocationRepositoryCreate(inputs).then((data: any) => {
    return data
  })
}
