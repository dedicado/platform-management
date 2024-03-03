'use client'

import { useCallback, useState } from 'react'
import { MdLogin } from 'react-icons/md'
import Modal from './Modal'
import Login from './Login'
//import { Authenticator } from '@aws-amplify/ui-react'

export default function AuthMenu() {
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
        <MdLogin size={24} />
      </span>
      <Modal open={openModal} onClose={handleModal} subtitle="" >
        <Login onClose={handleModal} />
        <div className="relative w-full flex justify-center">
          {/*<Authenticator className="lowercase" />*/}
        </div>
      </Modal>
    </div>
  )
}