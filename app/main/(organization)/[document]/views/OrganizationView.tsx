'use client'

import { useParams } from 'next/navigation'
import OrganizationCreditBox from '../components/OrganizationCreditBox'
import OrganizationMemberBox from '../components/OrganizationMember Box'

export default function OrganizationView() {
  const params = useParams()
  const { document } = params

  return (
    <div className="relative">
      <div className="w-full flex flex-col sm:flex-row gap-2">
        <div className="w-full flex"></div>
        <a className="mx-auto hover:opacity-80">
          <OrganizationCreditBox />
        </a>
        <a href={`/${document}/membros`} className="mx-auto hover:opacity-80">
          <OrganizationMemberBox />
        </a>
      </div>
      <div className="w-full"></div>
    </div>
  )
}
