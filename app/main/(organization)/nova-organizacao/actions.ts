'use server'

import { nextAuthOptions } from '@/libraries/next-auth'
import { organizationRepositoryCreateForUser } from '@/repositories/organization/POST'
import { OrganizationType } from '@/types/organization'
import { sendEmail } from '@/utils/send-messages'
import { emailNewOrganization } from '@/utils/send-messages/templates'
import { CreateOrganizationValidationType } from '@/validations/organization'
import { getServerSession } from 'next-auth'
import { revalidatePath, revalidateTag } from 'next/cache'

export const createOrganizationForUser = async (
  inputs: CreateOrganizationValidationType,
): Promise<OrganizationType | any> => {
  const session = await getServerSession(nextAuthOptions)
  const userPhone = session?.user?.phone ?? ''

  return await organizationRepositoryCreateForUser(userPhone, inputs)
    .then(async (data: any) => {
      const message = emailNewOrganization({
        name: session?.user?.name!,
        organization: inputs?.name,
      })
      await sendEmail({
        bbc: inputs?.email,
        body: message,
        subject: 'sua nova organização na plataforma dedicado',
        to: session?.user?.email!,
      })
      revalidateTag('organizations')
      revalidatePath('/')

      return data
    })
    .catch((error: any) => {
      return error?.message
    })
}
