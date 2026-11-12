import type { GeocodedLocation, GeocodingResponse } from '../types/location'

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'

export async function searchLocations(
  name: string,
): Promise<GeocodedLocation[]> {
  const params = new URLSearchParams({
    name,
    count: '5',
    language: 'en',
    format: 'json',
  })

  const response = await fetch(`${GEOCODING_URL}?${params}`)

  if (!response.ok) {
    throw new Error(`Location search failed (status ${response.status})`)
  }

  const data: GeocodingResponse = await response.json()
  return data.results ?? []
}
