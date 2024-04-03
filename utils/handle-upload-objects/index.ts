'use server'

import { getServerSession } from 'next-auth'
import { UploadFileType } from './types'
import { nextAuthOptions } from '@/libraries/next-auth'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

export const uploadFileToS3 = async ({
  data,
  name,
  pathname,
}: UploadFileType): Promise<any> => {
  const session = await getServerSession(nextAuthOptions)

  const fileName = name ? `${session?.user?.id}/${name}` : session?.user?.id

  const ACCESS_KEY_ID = process.env.PLATFORM_AWS_ACCESS_KEY ?? ''
  const SECRET_ACCESS_KEY = process.env.PLATFORM_AWS_PRIVATE_KEY ?? ''

  const s3Client = new S3Client({
    region: 'sa-east-1',
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  })

  try {
    if (!session) return null

    const file: File | null = (data.get('file') as File) || null
    const size = file?.size
    const type = file?.type
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const params = {
      Bucket: 'dedicated-platform',
      Key: `${pathname}/${fileName}`,
      ContentType: type,
      ContentLength: size,
      Body: buffer,
      Metadata: {
        profile: session?.user?.profile,
        userId: session?.user?.id,
      },
    }
    const putObjectCommand = new PutObjectCommand(params)

    let url =
      'https://s3.sa-east-1.amazonaws.com/dedicated-platform/' +
      encodeURIComponent(params?.Key)

    return await s3Client
      .send(putObjectCommand)
      .then(() => {
        return { url: url }
      })
      .catch((error: any) => {
        console.log(error?.message || error)
        return error?.message || 'ocorreu um erro inesperado'
      })
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
