export type HandleUploadFileType = {
  data: FormData
  name?: string
  pathname: string
}

export type HandleUploadImageType = {
  imageUrl: string
  param: 'attachment' | 'organization' | 'user'
  paramId?: string
}
