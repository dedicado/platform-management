'use client'

import { useParams } from 'next/navigation'
import OrganizationCreditBox from '../components/OrganizationCreditBox'
import OrganizationMemberBox from '../components/OrganizationMember Box'
import OrganizationOrderBox from '../components/OrganizationOrderBox'
import { Suspense } from 'react'

export default function OrganizationView() {
  const params = useParams()
  const { document } = params

  return (
    <div className="relative">
      <div className="w-full flex flex-col sm:flex-row gap-2">
        <div className="block w-full">
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col sm:flex-row gap-2">
              <Suspense>
                <a href={`/${document}/pedidos`} className="hover:opacity-80">
                  <OrganizationOrderBox />
                </a>
              </Suspense>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-2"></div>
          </div>
        </div>
        <Suspense>
          <a href={`#`} className="mx-auto hover:opacity-80">
            <OrganizationCreditBox />
          </a>
        </Suspense>
        <Suspense>
          <a href={`/${document}/membros`} className="mx-auto hover:opacity-80">
            <OrganizationMemberBox />
          </a>
        </Suspense>
      </div>
      <div className="w-full"></div>
    </div>
  )
}
