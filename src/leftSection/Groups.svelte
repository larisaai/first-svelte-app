<script>
import {me} from './../data.js'
import Messenger from 'svelte-icons/fa/FaFacebookMessenger.svelte';
import Market from 'svelte-icons/fa/FaStore.svelte';

</script>
<!-- ############################################# -->
<section class="groups">
    <h1>Groups</h1>
	{#each $me.groups as jGroup}
        <div class="group">
            <img class="group-image" src="{jGroup.image ? jGroup.image : ""}" alt="">
            <h5>{jGroup.groupName}</h5>
        </div>
    {/each}
</section>

<!-- ############################################# -->

<style>
.group { display: flex; justify-content: flex-start;align-items: center; margin-bottom: 1rem;}
.group-image { width: 2rem; height: 2rem; object-fit: cover; border-radius: 10%; margin-right: 0.5rem;}
</style>