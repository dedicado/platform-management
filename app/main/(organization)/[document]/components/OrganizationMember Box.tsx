'use client'

import { MemberType } from '@/types/organization'
import { useOrganization } from '../context'
import { useEffect, useState } from 'react'

interface Props {}

export default function OrganizationMemberBox(props: Props) {
  const {} = props

  const { members }: MemberType[] | any = useOrganization()

  let memberCount: number = members?.length
  const [count, setCount] = useState<number>(memberCount)

  useEffect(() => {
    members && setCount(memberCount)
  }, [memberCount, members])

  return (
    <div className="relative w-full min-w-sm sm:max-w-xs bg-sky-600/80 p-4 rounded-md shadow-md">
      <div className="h-80 flex flex-col justify-center items-center">
        <div className="mx-auto p-2">
          <span className="text-8xl sm:text-6xl text-slate-200">{count}</span>
        </div>
        <div className="mx-auto p-2">
          <h4 className="text-4xl sm:text-2xl text-center text-sky-400/60">
            {`${count > 1 ? 'membros' : 'membro'} na organização`}
          </h4>
        </div>
      </div>
    </div>
  )
}
