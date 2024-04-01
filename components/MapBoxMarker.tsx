'use client'

import { Fragment, ReactNode, useCallback, useState } from 'react'
import { Marker, Popup } from 'react-map-gl'

interface Props {
  children?: ReactNode
  latitude: number
  longitude: number
}

export default function MapBoxMarker(props: Props) {
  const { children, latitude, longitude } = props

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const handleOpenPopup = useCallback(() => {
    setOpenPopup(!openPopup)
  }, [openPopup])

  return (
    <Fragment>
      <Marker latitude={latitude} longitude={longitude}></Marker>
      {openPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          onClose={handleOpenPopup}
          closeButton={true}
          closeOnClick={false}
          offset={25}
        >
          <div className="relative">{children}</div>
        </Popup>
      )}
    </Fragment>
  )
}
