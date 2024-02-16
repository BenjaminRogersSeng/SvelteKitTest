<script lang="ts">
	export let data;
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f2f2f2;
	}

	.title {
		font-size: 3rem;
		color: #333;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}
</style>

<div class="container">
	<h1 class="title">Welcome to my Demo Project!</h1>
</div>

<pre>{JSON.stringify(data, null, 2)}</pre>
