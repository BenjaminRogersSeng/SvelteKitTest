<script lang="ts">
	export let data
  </script>
  
  <a href="/Home">Home</a>

  <h1>Top 100 Cryptocurrencies</h1>
  
  <ol>
	{#each data.currencies.data as coin}
	  <li><p>{coin.name} - {coin.symbol}</p></li>
	{/each}
  </ol>