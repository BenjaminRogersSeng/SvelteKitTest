export const load = async ({ fetch }) => {
    const query = `query AllCharacters {
      characters {
        results {
          name
          id
          image
        }
      }
    }`
  
    try {
      const [charactersResponse] =
        await Promise.all([
          fetch('https://rickandmortyapi.com/graphql/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
          }),
        ])
  
      if (!charactersResponse.ok) {
        throw new Error(`HTTP error: ${charactersResponse.status}`)
      }
  
      const charactersData = await charactersResponse.json()
  
      const characters = charactersData.data.characters.results
  
      return { characters }
    } catch (error) {
      console.error(error)
      return { error: 'Unable to fetch data' }
    }
  }