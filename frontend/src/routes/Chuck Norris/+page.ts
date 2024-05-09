export const load = (async () => {
    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'ac40989decmshebcc3324a6b9de4p134ebejsn9a04d271e463',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const Norris = await response.json();
        return {Norris};
    } catch (error) {
        console.error(error);
    }
})