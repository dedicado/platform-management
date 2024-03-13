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
    <div className='relative'>
      <span
        className="w-full flex item-center gap-2 text-xs text-center text-slate-200 bg-sky-800 p-2 rounded-md cursor-pointer hover:text-opacity-50"
        onClick={handleModal}
      >
        <MdOutlineDomainAdd size={18} />
        criar nova organização
      </span>
      <Modal
        open={openModal}
        onClose={handleModal}
        subtitle={`criar nova organização na plataforma`}
      >
        <div className="w-full max-w-lg">
          <CreateOrganizationForm onClose={handleModal} />
        </div>
      </Modal>
    </div>
  )
}
