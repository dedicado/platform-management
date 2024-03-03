'use client'

import { LoginValidation, LoginValidationType } from '@/validations/login'
import { signIn } from '@aws-amplify/auth'
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
    const { phone, password } = inputs
    try {
      await signIn({
        username: `+55${phone}`,
        password: password,
        options: {
          authFlowType: 'USER_PASSWORD_AUTH',
        },
      })
      toast.success('boas vindas a sua melhor plataforma de serviços')
    } catch (error: any) {
      toast.error(error?.message)
    } finally {
      router.refresh()
    }
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
    </form>
  )
}
