'use client'

import Modal from '@/components/Modal'
import { OrderType } from '@/types/order'
import { useState, useCallback } from 'react'

interface Props {
  order: OrderType | any
}

export default function OrderDetailModal(props: Props) {
  const { order } = props

  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleModal = useCallback(() => {
    setOpenModal(!openModal)
  }, [openModal])

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModal}
        subtitle={`detalhes do pedido ${order?.code}`}
      >
        detailhes do pedido
      </Modal>
    </div>
  )
}
