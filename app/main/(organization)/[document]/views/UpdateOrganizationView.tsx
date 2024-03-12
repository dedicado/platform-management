'use client'

import { usePlatform } from '@/app/context'
import Modal from '@/components/Modal'
import { MemberType, OrganizationType } from '@/types/organization'
import { useState, useCallback } from 'react'
import { MdEditSquare } from 'react-icons/md'

interface Props {
  data: OrganizationType | any
}

export default function UpdateOrganizationView(props: Props) {
  const { data } = props
  const { member }: MemberType[] | any = usePlatform()
  const role = member.map(
    (member: MemberType) => member?.organizationId == data?.id && member?.role,
  )

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = useCallback(() => {
    setOpenModal(!openModal)
  }, [openModal])

  return (
    <div>
      {role.includes('owner' || 'administrator') && (
        <span
          className="flex rounded-full mx-auto p-1 cursor-pointer hover:opacity-50 hover:shadow-md"
          onClick={handleModal}
        >
          <MdEditSquare size={24} />
        </span>
      )}
      <Modal
        open={openModal}
        onClose={handleModal}
        subtitle={`atualizar informações da organização ${data?.name}`}
      >
        atualizar organização
      </Modal>
    </div>
  )
}