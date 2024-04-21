'use client'

import { csvToJsonConverter } from '@/utils/handle-converter'
import { ChangeEvent, useCallback, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  document: string
  onClose: () => void
  param: 'orders' | 'tasks' | 'users'
}

export default function CsvUpload(props: Props) {
  const { document, onClose, param } = props

  const [csvFile, setCsvFile] = useState<File>()
  const [dataJson, setDataJson] = useState<[]>()
  const [loaded, setLoaded] = useState<boolean>(false)

  const handleEventFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let file = event.target.files?.[0] as File
      let size = file?.size
      if (!file) {
        toast.error('o arquivo não foi carregado corretamente')
        return null
      }
      if (size > 1024 * 1024 * 10) {
        toast.error(`o arquivo é maior que 10Mb`)
        return null
      } else {
        setCsvFile(file)
        setLoaded(true)
      }
      return null
    },
    [],
  )

  const handleConvertFile = useCallback(async () => {
    if (!csvFile) toast.error('o arquivo não foi carregado')
    const data = new FormData()
    csvFile && data.append('file', csvFile)

    await csvToJsonConverter(data)
      .then((data: any) => {
        setDataJson(data)
        onClose()
      })
      .catch((error) => toast.error(error?.message))
  }, [csvFile, onClose])

  return (
    <div className="relative flex flex-col justify-center gap-4">
      <div className="relative flex flex-col">
        <input
          className="block p-1 rounded-md bg-slate-200 text-sm font-thin"
          type="file"
          accept=".csv"
          onChange={handleEventFile}
        />
        <button
          className="w-full py-2 my-2 text-slate-50 font-semibold bg-sky-400/75 rounded-md hover:opacity-80 hover:shadow-md"
          type="button"
          hidden={!loaded}
          onClick={handleConvertFile}
        >
          importar planilha
        </button>
      </div>
    </div>
  )
}
