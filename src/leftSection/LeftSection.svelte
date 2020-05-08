<script>
import {me} from './../data.js'
import Groups from './Groups.svelte';
import Shortcuts from './Shortcuts.svelte';
import Me from './../components/Me.svelte'



</script>
<!-- ############################################# -->
<section class="shourcuts">
    <Me/>
	<Shortcuts/>
	<Groups/>

</section>

<!-- ############################################# -->

<style>
    .shourcuts { 
        padding: 2rem;
        position: fixed;
         }

</style>