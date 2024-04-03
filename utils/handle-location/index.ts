'use server'

import { RoutesByCoordinationsType } from './types'

export const getRoutesByCoordinations = async ({
  destination,
  origin,
}: RoutesByCoordinationsType): Promise<any> => {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${
    origin?.longitude + ',' + origin?.latitude
  };${
    destination?.longitude + ',' + destination?.latitude
  }?overview=full&geometries=geojson&access_token=${
    process.env.MAPBOX_ACCESS_TOKEN
  }`

  try {
    if (!destination || !origin) return null

    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await data.json()

    return result
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}

export const getRoutesByJson = async (url: string): Promise<any> => {
  try {
    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await data.json()
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
