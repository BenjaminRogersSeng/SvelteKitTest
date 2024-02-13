<script>
	let moviesData = ""; // Initialize the variable to store the fetched data

	async function getMoviesData() {
		const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles', {
			method: 'GET',
			headers: {
                'X-RapidAPI-Key': 'ac40989decmshebcc3324a6b9de4p134ebejsn9a04d271e463',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
		});

		const data = await response.json(); // Parse the JSON response
		moviesData = data.results; // Store just the results part in moviesData
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={getMoviesData}>Fetch Movies</button>

{#if moviesData}
	<ul>
		{#each moviesData as movie}
			<li>{movie.titleText.text}</li>
		{/each}
	</ul>
{:else}
	<p>No movies data to display. Click the button to fetch movies.</p>
{/if}
