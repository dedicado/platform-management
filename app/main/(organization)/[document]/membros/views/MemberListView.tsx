'use client'

import { MemberType } from '@/types/organization'
import { useOrganization } from '../../context'
import Unauthorized from '@/components/Unauthorized'
import CreateMemberView from './CreateMemberView'
import MemberDetailInListView from './MemberDetailInListView'

export default function MemberListView() {
  const { members }: MemberType[] | any = useOrganization()

  return members?.length > 0 ? (
    <div className="relative">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <CreateMemberView />
          <h6 className="text-lg dark:text-white lowercase">
            adicionar membro
          </h6>
        </div>
        <hr className="border-1 border-slate-400" />
        <ul className="w-full">
          {members?.message ? (
            <div className="block">
              <Unauthorized
                message={members?.message}
                statusCode={members?.statusCode}
              />
            </div>
          ) : (
            members?.map((member: MemberType) => {
              return (
                member?.active && (
                  <div key={member?.id}>
                    <MemberDetailInListView member={member} />
                  </div>
                )
              )
            })
          )}
        </ul>
      </div>
    </div>
  ) : (
    <div className="relative">
      <div className="py-4">
        <h4 className="text-center text-xl dark:text-white lowercase ">
          não existem memberos nesta organização
        </h4>
      </div>
    </div>
  )
}
