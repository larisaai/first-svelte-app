<script>
import Nav from './Nav.svelte';
import OnlineFriends from './OnlineFriends.svelte';
import ChatContainer from './ChatContainer.svelte';
import Home from './Home.svelte';
// import Posts from './posts/Posts.svelte';
// import Shortcuts from './shortcuts/Shortcuts.svelte';

</script>
<!-- ################### -->


<main class="main-page">
	<Nav/>
	<Home/>
	<OnlineFriends/>
	<ChatContainer/>
</main>


<!-- ################### -->

<style>
	.main-page { margin-top:4rem; background-color: #e9ecef }
</style>