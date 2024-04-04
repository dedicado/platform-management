'use client'

import Modal from '@/components/Modal'
import { useState, useCallback } from 'react'
import { MdEditSquare } from 'react-icons/md'

interface Props {}

export default function UpdateOrganizationButton(props: Props) {
  const {} = props

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
        subtitle={`atualizar informações da organização`}
      >
        atualizar organização
      </Modal>
    </div>
  )
}
