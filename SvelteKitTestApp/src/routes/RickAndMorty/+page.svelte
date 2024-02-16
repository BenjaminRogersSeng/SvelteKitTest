<script lang="ts">
  export let data
</script>

<style>
  h1 {
    color: blue;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  figure {
    display: inline-block;
    margin: 10px;
    padding: 10px;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  figcaption {
    text-align: center;
    max-width: 100px;
  }
</style>

<h1>Every Rick and Morty character</h1>
<div class="gallery">
  {#each data.characters as character}
  <figure>
    <img src={character.image} alt={character.name} width="100" height="100">
    <figcaption>{character.id}. {character.name}</figcaption>
  </figure>
  {/each}
</div>

<pre>{JSON.stringify(data, null, 2)}</pre>

