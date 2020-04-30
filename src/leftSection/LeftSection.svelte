<script>
import {me} from './../data.js'
import Groups from './Groups.svelte';
import Shortcuts from './Shortcuts.svelte';



</script>
<!-- ############################################# -->
<section class="shourcuts">
    
    <div class="pofile-name">
        <img class="profile-pic-small" src="{$me.profilePicture}" alt="">
        <h5 class="name">{$me.name} {$me.lastName}</h5>
    </div>
   
	<Shortcuts/>
	<Groups/>

</section>

<!-- ############################################# -->

<style>
    .shourcuts { padding: 1rem; position: fixed;}
        .profile-pic-small { width: 2rem; height: 2rem; object-fit: cover; border-radius: 50%;}
        .pofile-name {
            display: grid;
            grid-template-columns: 1fr 2fr; 
            align-items: center;
        }

</style>