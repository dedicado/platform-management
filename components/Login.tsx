'use client'

import { LoginValidation, LoginValidationType } from '@/validations/login'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

interface Props {
  onClose: () => void
}

export default function Login(props: Props) {
  const { onClose } = props
  const router = useRouter()

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<LoginValidationType>({
    resolver: zodResolver(LoginValidation),
  })

  const onSubmit: SubmitHandler<LoginValidationType> = async (inputs) => {
    return await signIn('credentials', {
      redirect: false,
      phone: inputs?.phone,
      password: inputs?.password,
    })
      .then((res: any) => {
        if (!res.ok) {
          toast.error(res?.error)
        } else {
          toast.success('boas vindas a sua melhor plataforma de serviços')
          onClose()
          router.refresh()
        }
      })
      .finally(() => reset())
  }

  return (
    <form
      className="flex flex-col gap-2"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="phone">celular</label>
      <input
        id="phone"
        className="w-full rounded-md"
        {...register('phone')}
        type="number"
        placeholder='55 48 98765 4321'
      />
      {errors && (
        <span className="text-xs text-red-400 italic lowercase">
          {errors?.phone?.message}
        </span>
      )}

      <label htmlFor="password">senha</label>
      <input
        id="password"
        className="w-full rounded-md"
        {...register('password')}
        type="password"
        placeholder='s*e*n*h*a'
      />
      {errors && (
        <span className="text-xs text-red-400 italic lowercase">
          {errors?.password?.message}
        </span>
      )}

      <button
        className="w-full py-2 my-2 text-slate-50 font-semibold bg-sky-400/75 rounded-md hover:opacity-80 hover:shadow-md"
        type="submit"
      >
        autenticar-se
      </button>

      <div className="w-full flex justify-center">
        <span className="text-center text-xs font-thin">ou</span>
      </div>

      <a
        href="/registrar-se"
        className="w-full flex justify-center py-2 my-2 text-slate-50 font-semibold bg-green-400/75 rounded-md hover:opacity-80 hover:shadow-md"
        type="button"
      >
        registrar-se
      </a>
    </form>
  )
}
