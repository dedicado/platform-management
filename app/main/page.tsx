import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import { memo } from 'react'
import LandingView from './views/LandingView'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/libraries/next-auth'
import MainView from './views/MainView'

export const metadata: Metadata = {
  title: {
    default: 'você está na melhor plataforma de serviços',
    template: `%s | dedicado`,
  },
  description:
    'Soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const MainPage = async () => {
  const session = await getServerSession(nextAuthOptions)

  return session ? (
    <PageDisplay
      title="este é o seu espaço dedicado"
      subtitle="a melhor plataforma de serviços"
    >
      <div className="relative w-full">
        <MainView />
      </div>
    </PageDisplay>
  ) : (
    <LandingView />
  )
}

export default memo(MainPage)
