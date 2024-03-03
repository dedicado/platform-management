import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import ProfileView from './views/ProfileView'
import { memo } from 'react'
import { currentUser } from '@/utils/amplify-utils'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: {
    default: 'meu perfil na plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const ProfilePage = async () => {
  const user = await currentUser()

  return user ? (
    <PageDisplay title={`olá ${user?.name || ''}`} subtitle="este é o seu espaço dedicado">
      <div className="relative w-full">
        <ProfileView />
      </div>
    </PageDisplay>
  ) : (
    redirect('/')
  )
}

export default memo(ProfilePage)
