<script lang="ts">
    import icon_logo from '$lib/assets/logo.png';
    import icon_ram from '$lib/assets/Rick-and-Morty.png';
    import icon_crypto from '$lib/assets/crypto.png';
    import icon_chuck_norris from '$lib/assets/chuck_norris.jpg';
    
    
    let icon_height = 60;
    let icon_width = 60;
</script>

<style>
    nav {
        display: flex;
        justify-content: left;
        background-color: #f2f2f2;
        padding: 10px;
    }

    img {
        margin: 10px;
    }
</style>

<nav>
	<a href="/">
        <img src="{icon_logo}" height="{icon_height}" width="{icon_width}">
    </a>

    <a href="/RickAndMorty">
        <img src="{icon_ram}" height="{icon_height}" width="{icon_width}">
    </a>

    <a href="/Crypto">
        <img src="{icon_crypto}" height="{icon_height}" width="{icon_width}">
    </a>

    
    <a href="/Chuck Norris">
        <img src="{icon_chuck_norris}" height="{icon_height}" width="{icon_width}">
    </a>
</nav>

<title>Demo Project</title>

<slot></slot>