import PageDisplay from '@/components/PageDisplay'
import { Metadata } from 'next'
import ProfileView from './views/ProfileView'
import { memo } from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/libraries/next-auth'
import { getProfile } from './actions'
import { UserType } from '@/types/user'

export const metadata: Metadata = {
  title: {
    default: 'meu perfil na plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

const ProfilePage = async () => {
  const session = await getServerSession(nextAuthOptions)
  const profile: UserType | any = await getProfile()

  return session ? (
    <PageDisplay
      title={`olá ${profile?.name.split(' ')[0] || ''}!`}
      subtitle="este é o seu espaço dedicado"
    >
      <div className="relative w-full">
        <ProfileView data={profile} />
      </div>
    </PageDisplay>
  ) : (
    redirect('/')
  )
}

export default memo(ProfilePage)
