'use client'

import useFetch from '@/hooks/use-fetch'
import { UserType } from '@/types/user'
import { Session } from 'next-auth'
import { useCallback, useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import { MdJoinLeft, MdJoinRight } from 'react-icons/md'

export default function UserAvailable({ session }: { session: Session }) {
  const userId: string = session?.user?.id ?? ''
  const authorization: string = session?.user?.authorization ?? ''

  const { data: user, mutate } = useFetch<UserType | any>({
    url: `${process.env.USER_API_URL}/users/${userId}`,
    authorization: authorization,
  })

  const [available, setAvailable] = useState<boolean>(user?.available)
  const [isPending, startTransition] = useTransition()

  const handleAvailable = useCallback(() => {
    const updateProfileAvailable = async (available: boolean) => {
      return await fetch(
        `${process.env.USER_API_URL}/users/${session?.user?.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ available: available }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.user?.authorization}`,
          },
        },
      )
        .then(async (res: any) => {
          if (res.ok) {
            await mutate({
              ...user,
              available: available,
              revalidate: true,
              rollbackOnError: true,
            })
            setAvailable(available)
          }
        })
        .catch((error: any) => {
          console.error(error)
        })
    }

    user &&
      startTransition(async () =>
        available
          ? await updateProfileAvailable(false)
          : await updateProfileAvailable(true),
      )
    startTransition(() => {
      !available
        ? toast.success(
            `${
              user?.name.split(' ')[0]
            }, agora você está visível e dispinível na plataforma`,
            { duration: 10000 },
          )
        : toast.success(
            `${
              user?.name.split(' ')[0]
            }, você ficou invisível e indispinível na plataforma`,
            { duration: 10000 },
          )
    })
  }, [available, mutate, session, user])

  return (
    <div className="relative">
      <span
        className="flex justify-center items-center p-2 rounded-full cursor-pointer hover:shadow-md"
        onClick={handleAvailable}
      >
        {!available ? (
          <MdJoinRight size={24} />
        ) : (
          <MdJoinLeft size={24} color="#16a34a" />
        )}
      </span>
    </div>
  )
}
