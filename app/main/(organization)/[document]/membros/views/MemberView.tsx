'use client'

import { MemberType } from '@/types/organization'
import { useOrganization } from '../../context'

export const MemberView = () => {
  const { members }: MemberType[] | any = useOrganization()

  return (
    <div>
      <h1>página de membros da organização</h1>
    </div>
  )
}

export default MemberView
