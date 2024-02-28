import Link from 'next/link'
import Image from 'next/image'

export default function NotFoundPage() {
  const logotipo = '/logotipo.svg'
  return (
    <div className="h-screen w-full flex flex-col justify-center">
      <div className="p-8">
        <div className="mx-auto text-center">
          <Image
            className="w-[150px] h-[300px] mx-auto"
            src={logotipo}
            alt="dedicado"
            width={150}
            height={300}
            priority
          />
          <h4 className="text-lg font-bold lowercase">
            página não encontrada!
          </h4>
          <Link href="/" className="text-xs font-medium lowercase">
            retorne daqui
          </Link>
        </div>
      </div>
    </div>
  )
}
