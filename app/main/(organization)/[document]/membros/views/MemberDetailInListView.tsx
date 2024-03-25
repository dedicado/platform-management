'use client'

import Image from 'next/image'
import { celularMask } from 'masks-br'
import { getUserByPhone } from '@/app/main/users/actions'
import { MemberType } from '@/types/organization'
import { UserType } from '@/types/user'
import { useEffect, useState } from 'react'
import UpdateMemberView from './UpdateMemberView'

interface Props {
  member: MemberType | any
}

export default function MemberDetailInListView(props: Props) {
  const { member } = props

  const [user, setUser] = useState<UserType | any>()

  useEffect(() => {
    const userData = async () => {
      try {
        if (member) {
          const user = await getUserByPhone(member?.phone)
          user && setUser(user)
        }
      } catch (error: any) {
        console.error(error)
        return null
      }
    }
    userData()
  }, [member])

  const image = user?.image || '/avatar.svg'

  return (
    <li className="my-2 p-4 bg-slate-200 dark:bg-slate-800 dark:text-sky-600 rounded-md hover:shadow-md cursor-pointer">
      <div className="flex items-center justify-between space-x-2">
        <a className="flex flex-1 flex-col">
          <div className="flex items-center space-x-2">
            <div
              className={`p-1 rounded-md ${
                user?.available ? 'bg-green-400/50' : 'bg-sky-400/50'
              } shadow-md`}
            >
              <div className="w-['32px'] w-h-['32px']">
                <Image
                  className="rounded-md hover:opacity-80"
                  src={image}
                  loading="lazy"
                  alt={user?.name || member?.phone}
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h6 className="text-xl font-semibold hover:opacity-50 lowercase">
                {user?.name ?? ''}
              </h6>
              <span className="text-xs text-white bg-sky-600/50 p-1 rounded-md">
                {member?.role}
              </span>

              <small className="normal-nums font-thin">
                {celularMask(member?.phone)}
              </small>
            </div>
          </div>
        </a>
        <div className="flex items-center space-x-2">
          <UpdateMemberView member={member} name={user?.name} />
        </div>
      </div>
    </li>
  )
}
