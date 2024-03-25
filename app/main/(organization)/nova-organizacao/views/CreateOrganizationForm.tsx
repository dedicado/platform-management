'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import {
  CreateOrganizationValidation,
  CreateOrganizationValidationType,
} from '@/validations/organization'
import { useState, useTransition } from 'react'
import { AddressTypeByZipCode } from '@/utils/handle-address/types'
import { getAddressByZipCode } from '@/utils/handle-address'
import { createOrganizationForUser } from '../actions'
import { useRouter } from 'next/navigation'

export default function CreateOrganizationForm() {
  const [isPending, startTransition] = useTransition()
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  }>()

  const router = useRouter()

  const handleZipCode = (event: { target: { value: any } }) => {
    const data = event.target.value?.replace(/[^0-9]/g, '')
    if (data.length == 8) {
      startTransition(async () => {
        const { cep, address, lat, lng }: AddressTypeByZipCode | any =
          await getAddressByZipCode(data)

        if (cep) {
          setValue('street', address)
          setLocation({ latitude: Number(lat), longitude: Number(lng) })
        } else {
          toast.error(`cep ${data} inválido`)
        }
      })
    } else {
      toast.error(`este cep ${data} é inválido`)
    }
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<CreateOrganizationValidationType>({
    resolver: zodResolver(CreateOrganizationValidation),
  })
  const onSubmit: SubmitHandler<CreateOrganizationValidationType> = async (
    inputs,
  ) => {
    const result = await createOrganizationForUser({
      ...inputs,
      latitude: location?.latitude,
      longitude: location?.longitude,
    })
    if (result?.response?.error) {
      toast.error(result?.message)
    } else {
      reset()
      router.push(`/${inputs?.document}`)
      toast.success(result)
    }
  }

  return (
    <form
      className="relative flex flex-col gap-2"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative w-full">
          <label htmlFor="name" className="dark:text-sky-600">
            nome
          </label>
          <input
            id="name"
            className="w-full rounded-md"
            {...register('name')}
            type="text"
            placeholder='nome da organização'
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.name?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative w-full">
          <label htmlFor="document" className="dark:text-sky-600">
            cnpj
          </label>
          <input
            id="document"
            className="w-full rounded-md"
            {...register('document')}
            type="number"
            placeholder='00.000.000/0000-00'
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.document?.message}
            </span>
          )}
        </div>
        <div className="relative w-full">
          <label htmlFor="email" className="dark:text-sky-600">
            e-mail
          </label>
          <input
            id="email"
            className="w-full rounded-md"
            {...register('email')}
            type="text"
            placeholder='email@suaorganizacao.com.br'
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="relative w-full">
          <label htmlFor="phone" className="dark:text-sky-600">
            telefone
          </label>
          <input
            id="phone"
            className="w-full rounded-md"
            {...register('phone')}
            type="number"
            placeholder='48 98765 4321'
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.phone?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative w-full sm:w-1/3">
          <label htmlFor="zipCode" className="dark:text-sky-600">
            cep
          </label>
          <input
            className="w-full rounded-md"
            {...register('zipCode')}
            type="number"
            onBlur={handleZipCode}
            placeholder='00.000-000'
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.zipCode?.message}
            </span>
          )}
        </div>
        <div className="relative w-full sm:w-2/3">
          <label htmlFor="street" className="dark:text-sky-600">
            logradouro
          </label>
          <input
            id="street"
            className="w-full rounded-md bg-slate-200/50 border-0"
            {...register('street')}
            type="text"
            disabled
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.street?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative w-full">
          <label htmlFor="complement" className="dark:text-sky-600">
            complemento
          </label>
          <input
            id="complement"
            className="w-full rounded-md"
            {...register('complement')}
            type="text"
            placeholder='número e ponto de referência'
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.complement?.message}
            </span>
          )}
        </div>
      </div>

      <button
        className="w-full py-2 my-2 text-slate-50 font-semibold bg-sky-400/75 rounded-md hover:opacity-80 hover:shadow-md"
        type="submit"
      >
        criar organização
      </button>
    </form>
  )
}