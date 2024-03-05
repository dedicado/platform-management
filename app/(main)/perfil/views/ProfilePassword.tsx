'use client'

import Modal from '@/components/Modal'
import {
  ProfilePasswordUpdateValidation,
  ProfilePasswordUpdateValidationType,
} from '@/validations/profile'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useCallback, Fragment } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { updateProfilePassword } from '../actions'
import toast from 'react-hot-toast'
import { signOut } from 'next-auth/react'

export default function ProfilePassword() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = useCallback(() => {
    setOpenModal(!openModal)
  }, [openModal])

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ProfilePasswordUpdateValidationType>({
    resolver: zodResolver(ProfilePasswordUpdateValidation),
  })
  const onSubmit: SubmitHandler<ProfilePasswordUpdateValidationType> = async (
    inputs,
  ) => {
    const result = await updateProfilePassword(inputs)
    if (result?.response?.error) {
      toast.error(result?.message)
    } else {
      toast.success(result)
      reset()
      setOpenModal(!openModal)
      toast.success('autentique-se novamente com a nova senha')
      await signOut()
    }
  }

  return (
    <Fragment>
      <button
        className="w-full flex justify-center py-2 my-2 text-slate-50 font-semibold bg-orange-400/75 rounded-md hover:opacity-80 hover:shadow-md"
        type="button"
        onClick={handleModal}
      >
        atualizar senha
      </button>
      <Modal
        open={openModal}
        onClose={handleModal}
        subtitle={`atualizar a senha de acesso a plataforma`}
      >
        <form
          className="flex flex-col gap-2"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full">
              <label htmlFor="oldPassword">senha atual</label>
              <input
                id="oldPassword"
                className="w-full rounded-md"
                {...register('oldPassword')}
                type="password"
              />
              {errors && (
                <span className="text-xs text-red-400 italic lowercase">
                  {errors?.oldPassword?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full">
              <label htmlFor="newPassword">nova senha</label>
              <input
                id="newPassword"
                className="w-full rounded-md"
                {...register('newPassword')}
                type="password"
              />
              {errors && (
                <span className="text-xs text-red-400 italic lowercase">
                  {errors?.newPassword?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full">
              <label htmlFor="confirmNewPassword">confirme a nova senha</label>
              <input
                id="confirmNewPassword"
                className="w-full rounded-md"
                {...register('confirmNewPassword')}
                type="password"
              />
              {errors && (
                <span className="text-xs text-red-400 italic lowercase">
                  {errors?.confirmNewPassword?.message}
                </span>
              )}
            </div>
          </div>
          <button
            className="w-full py-2 my-2 text-slate-50 font-semibold bg-orange-400/75 rounded-md hover:opacity-80 hover:shadow-md"
            type="submit"
          >
            atualizar senha
          </button>
        </form>
      </Modal>
    </Fragment>
  )
}
