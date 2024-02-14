import type { PageLoad } from './$types';

export const load = async ({ fetch }) => {
    try {
      const response = await fetch(
        'https://api.coinlore.com/api/tickers/'
      )
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      const currencies = await response.json()
      return { currencies }
    } catch (error) {
      console.error(error)
      return { error: 'Unable to fetch currencies' }
    }
}