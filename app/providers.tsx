'use client'

import { ReactNode, useState, useTransition } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

export default function Providers({ children }: { children: ReactNode }) {
  const [isPending, startTransition] = useTransition()
  const [userLocation, setUserLocation] = useState<{
    lat: Number
    long: Number
  }>()
  const getUserLocation = async () => {
    try {
      navigator.geolocation.watchPosition((position) => {
        if (!position) toast.error('habilite a geolocalização do navegador!')
        position &&
          startTransition(() =>
            setUserLocation({
              lat: position?.coords?.latitude,
              long: position?.coords?.longitude,
            }),
          )
      })
    } catch (error: any) {
      console.error(error)
      return toast.error(error?.message || 'ocorreu um erro inesperado')
    }
  }
  setTimeout(async () => {
    await getUserLocation()
  }, 120000)

  console.log(userLocation)

  return (
    <SessionProvider>
      <div className="min-h-screen w-full">
        {children}
        <Toaster
          position={'top-center'}
          toastOptions={{ className: 'react-hot-toast' }}
        />
      </div>
    </SessionProvider>
  )
}
