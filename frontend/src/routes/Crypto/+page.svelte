<script lang="ts">
  export let data
</script>

<style>
  h1 {
    color: blue;
  }
  table {
    width: fit-content;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
</style>

<h1>Top 100 Cryptocurrencies</h1>

<table>
  <tr>
    <th>Rank</th>
    <th>Name</th>
    <th>Symbol</th>
    <th>Price</th>
    <th>Percent change 24h</th>
  </tr>
  {#each data.currencies as coin}
    <tr>
      <td>{coin.rank}</td>
      <td>{coin.name} </td>
      <td>{coin.symbol}</td>
      <td>${coin.price_usd}</td>
      <td>{coin.percent_change_24h}</td>
    </tr>
  {/each}
</table>