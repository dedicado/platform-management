import {
  RegisterValidation,
  RegisterValidationType,
} from '@/validations/register'

export const actionRegister = async (
  inputs: RegisterValidationType,
): Promise<any> => {
  try {
    if (await RegisterValidation.parseAsync(inputs)) {
      const data = await fetch(`${process.env.USER_API_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return data && (await data.json())
    }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
