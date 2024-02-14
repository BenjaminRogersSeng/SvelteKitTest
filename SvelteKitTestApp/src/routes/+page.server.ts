export const load = async ({ fetch }) => {
  try {
    const currenciesResponse =await fetch('https://api.coinlore.com/api/tickers/')

    if (!currenciesResponse.ok) {
      throw new Error(`HTTP error: ${currenciesResponse.status}`)
    }
    const currenciesData = await currenciesResponse.json()
    const currencies = currenciesData.data

    return { ...fetch, currencies }
  } catch (error) {
    console.error(error)
    return { error: 'Unable to fetch data' }
  }
}