'use server'

import { getServerSession } from 'next-auth'
import { UploadFileType } from './types'
import { nextAuthOptions } from '@/libraries/next-auth'

export const uploadFileToS3 = async ({
  data,
  name,
  pathname,
}: UploadFileType): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)
  const fileName = name || session?.user?.name?.replace(' ', '-').toLowerCase()

  try {
    const file: File | null = (data.get('file') as File) || null
    const size = file?.size
    const type = file?.type
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const params = {
      Bucket: 'dedicated-platform',
      Key: pathname + '/' + session?.user?.phone + '/' + fileName,
      ContentType: type,
      ContentLength: size,
      Body: buffer,
      Metadata: {
        profile: session?.user?.profile,
        userId: session?.user?.id,
      },
    }

    return { url: params }
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
