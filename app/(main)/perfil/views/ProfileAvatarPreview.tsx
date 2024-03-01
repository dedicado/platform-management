'use client'

import Image from 'next/image'
import {
  ChangeEvent,
  Suspense,
  useCallback,
  useState,
  useTransition,
} from 'react'
import toast from 'react-hot-toast'

interface Props {
  data: string
  onClose: () => void
}
export default function ProfileAvatarPreview(props: Props) {
  const { data, onClose } = props

  const [isPending, startTransition] = useTransition()

  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(data)
  const [loaded, setLoaded] = useState<boolean>(false)

  const handleUploadFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let file = event.target.files?.[0] as File
      let url = URL?.createObjectURL(file)
      if (file) {
        setUploadFile(file)
        startTransition(() => setPreviewUrl(url))
        setLoaded(true)
      }
    },
    [],
  )

  const handleSendFile = useCallback(async () => {
    try {
      toast.success('esta funcionalidade está em fase de implementação')
    } catch (error: any) {
      toast.error(error?.message || 'ocorreu um erro inesperado')
      console.error(error)
    } finally{
      onClose()
    }
  }, [onClose])

  return (
    <div className="relative flex flex-col justify-center gap-4">
      <div className="p-4 flex justify-center">
        {
          <Suspense fallback={'...carregando'}>
            <Image
              className="rounded-md"
              src={previewUrl || data}
              loading="lazy"
              alt="user"
              width={218}
              height={218}
            />
          </Suspense>
        }
      </div>
      <hr className="border-1 border-slate-400" />
      <div className="relative flex flex-col">
        <input
          className="block p-1 rounded-md bg-slate-200 text-sm font-thin"
          type="file"
          onChange={handleUploadFile}
        />
        <button
          className="w-full py-2 my-2 text-slate-50 font-semibold bg-sky-400/75 rounded-md hover:opacity-80 hover:shadow-md"
          type="button"
          hidden={!loaded}
          onClick={handleSendFile}
        >
          atualizar imagem
        </button>
      </div>
    </div>
  )
}
