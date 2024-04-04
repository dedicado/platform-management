'use client'

import PageDisplay from '@/components/PageDisplay'
import { memo } from 'react'
import CreateOrganizationForm from './views/CreateOrganizationForm'
import { redirect } from 'next/navigation'
import { usePlatform } from '@/app/context'
import { UserType } from '@/types/user'

const OrganizationCreatePage = () => {
  const { user }: UserType | any = usePlatform()

  return user ? (
    <PageDisplay
      title={`criar nova organização`}
      subtitle={`a melhor plataforma de serviços`}
    >
      <div className="w-full">
        {user && user?.document ? (
          <div className="relative flex flex-col justify-center items-center gap-2 my-8">
            <div className="max-w-2xl w-full">
              <div className="flex justify-center p-4">
                <span className="text-center text-lg font-medium text-sky-400">
                  através da sua organização poderá adicionar membros e utilizar
                  todas as soluções dedicadas que a plataforma oferece
                </span>
              </div>
              <CreateOrganizationForm />
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col justify-center items-center gap-2 my-8">
            <div className="max-w-md w-full bg-sky-200/50 p-4 rounded-md shadow-md">
              <div className="flex flex-col justify-center items-center gap-2 my-2">
                <h2 className="text-4xl text-center font-semibold lowercase text-sky-800">
                  olá {user?.name}
                </h2>
                <small className="text-center text-xs text-white">
                  percebemos que algumas informações do seu perfil aqui na
                  plataforma ainda estão incompletas.
                </small>
                <small className="text-center text-base text-sky-800">
                  para seguir com a criação de uma nova organização, por
                  gentileza atualize as informações do seu perfil
                </small>
              </div>
            </div>
            <a
              href="/perfil"
              className="bg-sky-400 hover:bg-sky-400/60 py-1 my-2 max-w-md w-full rounded-md shadow-md text-white text-center "
            >
              atualizar agora
            </a>
          </div>
        )}
      </div>
    </PageDisplay>
  ) : (
    redirect('/')
  )
}
export default memo(OrganizationCreatePage)
