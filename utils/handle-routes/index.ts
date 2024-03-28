'use server'

import { RoutesByCoordinateType } from './type'

export const getRoutesByCoordinate = async ({
  destination,
  origin,
}: RoutesByCoordinateType) => {
  try {
    const url: string = 'https://api.mapbox.com/directions/v5/mapbox/driving'
    const response = await fetch(
      `${url}/${origin?.longitude + ',' + origin?.latitude};${
        destination?.longitude + ',' + destination?.latitude
      }?steps=true&&geometries=geojson&access_token=${
        process.env.MAPBOX_ACCESS_TOKEN
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()
    const coordinates = data?.routes[0]?.geometry?.coordinates

    return coordinates
  } catch (error: any) {
    return error?.message || 'ocorreu um erro inesperado'
  }
}
