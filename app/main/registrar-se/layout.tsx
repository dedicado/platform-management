import { nextAuthOptions } from '@/libraries/next-auth'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'registrar-se na plataforma',
    template: `%s | dedicado`,
  },
  description:
    'soluções personalizadas de sistemas de alta performance que aumentam a produtividade de pessoas e organizações',
}

export default async function RegisterLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await getServerSession(nextAuthOptions)
  return !session ? <div>{children}</div> : redirect('/')
}
