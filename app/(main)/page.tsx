import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import { memo } from 'react'
import MainView from './views/MainView'
import { isAuthenticated } from '@/utils/amplify-utils'
import LandingView from './views/LandingView'

export const metadata: Metadata = {
  title: {
    default: 'você está na melhor plataforma de serviços',
    template: `%s | dedicado`,
  },
  description:
    'Soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const MainPage = async () => {
  const authenticated = await isAuthenticated()

  return authenticated ? (
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
