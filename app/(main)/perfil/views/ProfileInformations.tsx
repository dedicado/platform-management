'use client'

import { UserType } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  ProfileUpdateValidation,
  ProfileUpdateValidationType,
} from '@/validations/profile'
import { updateProfile } from '../actions'

interface Props {
  data: UserType | any
}

export default function ProfileInformations(props: Props) {
  const { data } = props

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ProfileUpdateValidationType>({
    resolver: zodResolver(ProfileUpdateValidation),
    defaultValues: {
      name: data?.name,
      document: data?.document,
      phone: data?.phone,
      email: data?.email,
    },
  })
  const onSubmit: SubmitHandler<ProfileUpdateValidationType> = async (
    inputs,
  ) => {
    try {
      const result = await updateProfile(inputs)
      if (result?.response?.error) {
        toast.error(result?.message)
      } else {
        toast.success(result)
      }
    } catch (error: any) {
      toast.success(error?.message || 'ocorreu um erro inesperado')
    }
  }

  return (
    <form
      className="flex flex-col gap-2"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="relative w-full">
          <label htmlFor="name">nome</label>
          <input
            id="name"
            className="w-full rounded-md"
            {...register('name')}
            type="text"
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.name?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="relative w-full sm:w-2/3">
          <label htmlFor="email">e-mail</label>
          <input
            id="email"
            className="w-full rounded-md"
            {...register('email')}
            type="email"
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="relative w-full sm:w-1/3">
          <label htmlFor="phone">telefone</label>
          <input
            id="phone"
            className="w-full rounded-md"
            {...register('phone')}
            type="number"
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.phone?.message}
            </span>
          )}
        </div>
        <div className="relative w-full sm:w-1/3">
          <label htmlFor="document">documento</label>
          <input
            id="document"
            className="w-full rounded-md"
            {...register('document')}
            type="number"
          />
          {errors && (
            <span className="text-xs text-red-400 italic lowercase">
              {errors?.document?.message}
            </span>
          )}
        </div>
      </div>

      <button
        className="w-full py-2 my-2 text-slate-50 font-semibold bg-sky-400/75 rounded-md hover:opacity-80 hover:shadow-md"
        type="submit"
      >
        atualizar informações
      </button>
    </form>
  )
}
