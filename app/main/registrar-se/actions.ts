'use server'

import { userRepositoryCreate } from '@/repositories/user/POST'
import { sendEmail } from '@/utils/send-messages'
import { emailWelcomeToThePlatform } from '@/utils/send-messages/templates'
import {
  RegisterValidation,
  RegisterValidationType,
} from '@/validations/register'
import { revalidatePath, revalidateTag } from 'next/cache'

export const registerUser = async (
  inputs: RegisterValidationType,
): Promise<any> => {
  try {
    if (await RegisterValidation.parseAsync(inputs)) {
      return await userRepositoryCreate({ ...inputs, profile: 'guest' }).then(
        async () => {
          const message = emailWelcomeToThePlatform({
            name: inputs?.name,
            password: inputs?.password!,
            phone: inputs?.phone,
          })
          await sendEmail({
            body: message,
            subject: 'boas vindas a melhor plataforma de serviços',
            to: inputs?.email,
          })
          revalidateTag('users')
          revalidatePath('/')
        },
      )
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
