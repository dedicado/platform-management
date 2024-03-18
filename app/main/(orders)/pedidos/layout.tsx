import { ReactNode } from 'react'

export default async function OrderLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>
}
