'use client'

import Modal from '@/components/Modal'
import { useState, useCallback } from 'react'
import { MdOutlineDomainAdd } from 'react-icons/md'
import { useSession } from 'next-auth/react'

export default function CreateOrganizationView() {
  const { data: session } = useSession()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = useCallback(() => {
    setOpenModal(!openModal)
  }, [openModal])

  return (
    <div>
      <span
        className="flex rounded-full p-1 cursor-pointer hover:opacity-50 hover:shadow-md dark:text-sky-600"
        onClick={handleModal}
      >
        <MdOutlineDomainAdd size={24} />
      </span>
      <Modal
        open={openModal}
        onClose={handleModal}
        subtitle={`criar minha organização`}
      >
        criar organização
      </Modal>
    </div>
  )
}
