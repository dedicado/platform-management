'use client'

import Modal from '@/components/Modal'
import { useState, useCallback } from 'react'
import { MdOutlineDomainAdd } from 'react-icons/md'
import CreateOrganizationForm from './CreateOrganizationForm'

export default function CreateOrganizationView() {
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
        subtitle={`criar nova organização na plataforma`}
      >
        <div className='w-full max-w-lg'>
          <CreateOrganizationForm onClose={handleModal} />
        </div>
      </Modal>
    </div>
  )
}
