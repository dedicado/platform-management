'use client'

import Image from 'next/image'
import { ReactNode, useCallback, useState } from 'react'
import { MdLocationPin } from 'react-icons/md'
import { Marker, Popup } from 'react-map-gl'

interface Props {
  children?: ReactNode
  color?: 'blue' | 'green' | 'red'
  image?: string | any
  latitude: number
  longitude: number
  title?: string
  key?: string | any
}

export default function MapMarker(props: Props) {
  const { children, color, image, latitude, longitude, title, key } = props

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const handlePopup = useCallback(() => {
    setOpenPopup(!openPopup)
  }, [openPopup])

  return (
    <div>
      <Marker
        anchor="bottom"
        key={key}
        longitude={longitude}
        latitude={latitude}
        onClick={handlePopup}
        style={{ borderRadius: 10 }}
      >
        {image ? (
          <div className="w-['32px'] w-h-['32px'] animate-pulse">
            <Image
              className="rounded-full cursor-pointer"
              src={image}
              loading="lazy"
              alt="user"
              width={32}
              height={32}
            />
          </div>
        ) : (
          <MdLocationPin
            className="animate-bounce"
            size={32}
            color={color || '#dc2626'}
          />
        )}
      </Marker>
      {openPopup && (
        <Popup
          key={key}
          longitude={longitude}
          latitude={latitude}
          onClose={handlePopup}
          closeButton={true}
          closeOnClick={false}
          offset={28}
        >
          <div className="flex flex-col max-w-md text-sky-800">
            <div className="p-2 w-full">
              <h4 className="text-lg text-center font-bold uppercase">{title}</h4>
              <div className="flex flex-1 flex-col gap-2">{children}</div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  )
}
