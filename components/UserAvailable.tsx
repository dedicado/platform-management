'use client'

import { usePlatform } from '@/app/context'
import { updateProfileAvailable } from '@/app/main/perfil/actions'
import { UserType } from '@/types/user'
import { useCallback, useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import { MdJoinLeft, MdJoinRight } from 'react-icons/md'

export default function UserAvailable() {
  const { userProfile }: UserType | any = usePlatform()
  const [available, setAvailable] = useState<boolean>(userProfile?.available)
  const [isPending, startTransition] = useTransition()

  const handleAvailable = useCallback(() => {
    setAvailable(!available)
    userProfile &&
      startTransition(async () =>
        available
          ? await updateProfileAvailable(false)
          : await updateProfileAvailable(true),
      )
    startTransition(() => {
      !available
        ? toast.success(
            `${
              userProfile?.name.split(' ')[0]
            }, agora você está visível e dispinível na plataforma`,
            { duration: 10000 },
          )
        : toast.success(
            `${
              userProfile?.name.split(' ')[0]
            }, você ficou invisível e indispinível na plataforma`,
            { duration: 10000 },
          )
    })
  }, [available, userProfile])

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
