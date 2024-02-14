<script lang="ts">
    export let data
  </script>

<a href="/Home">Home</a>

<h1>Rick And Morty Characters</h1>

  <ul>
	{#each data.characters as character}
	  <li><p>{character.name}</p></li>
	{/each}
  </ul>