<script>
import {me} from './../data.js'


</script>
<!-- ############################################# -->
<section class="groups">
     <h1>Shortcuts</h1>
        {#each $me.shortcuts as jShortcut}
        <div class="shourcut">
            <img class="shourcut-image" src="{jShortcut.image ? jShortcut.image : ""}" alt="">
            <h5>{jShortcut.shortcutName}</h5>
        </div>
        {/each}
</section>

<!-- ############################################# -->

<style>

.shourcut { display: flex; justify-content: flex-start;align-items: center; margin-bottom: 1rem;}
.shourcut-image { width: 2rem; height: 2rem; object-fit: cover; border-radius: 10%; margin-right: 0.5rem;}
</style>