'use client'

import Modal from '@/components/Modal'
import { MemberType } from '@/types/organization'

import { useState, useCallback } from 'react'
import { MdEditSquare } from 'react-icons/md'
import UpdateMemberForm from './UpdateMemberForm'

interface Props {
  member: MemberType | any
  name?: string
}

export default function UpdateMemberView(props: Props) {
  const { member, name } = props

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = useCallback(() => {
    setOpenModal(!openModal)
  }, [openModal])

  return (
    <div>
      <span
        className="flex rounded-full mx-auto p-1 cursor-pointer hover:opacity-50 hover:shadow-md"
        onClick={handleModal}
      >
        <MdEditSquare size={24} />
      </span>
      <Modal
        open={openModal}
        onClose={handleModal}
        subtitle={`atualizar informações do membro ${
          name ?? ''
        } na organização`}
      >
        <UpdateMemberForm member={member} onClose={handleModal} />
      </Modal>
    </div>
  )
}
