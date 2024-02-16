export const load = async () => {
  let characters = []
  for (let i = 0; i < 42; i++) {
    const reqCharacters = await fetch(
      'https://rickandmortyapi.com/graphql/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query AllCharacters {
              characters (page: ${i + 1}) {
                results {
                  name
                  id
                  image
                }
              }
            }
        `,
        }),
      }
    )
    const {
      data: {
        characters: { results },
      },
    } = await reqCharacters.json()
  
    characters.push(...results);

  }
  return {
    characters
  }
}

  