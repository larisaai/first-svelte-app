<script>
import { Router, Link, Route } from "svelte-routing";
import Nav from './Nav.svelte';
import OnlineFriends from './OnlineFriends.svelte';
import ChatContainer from './ChatContainer.svelte';
import Home from './routes/Home.svelte';
import Profile from './routes/Profile.svelte';
import Watch from './routes/Watch.svelte';
// import Posts from './posts/Posts.svelte';
// import Shortcuts from './shortcuts/Shortcuts.svelte';
export const url = "";
</script>
<!-- ################### -->


<main class="main-page">
	<Nav/>
	<OnlineFriends/>
	<ChatContainer/>
</main>


<!-- ################### -->

<style>
	.main-page { margin-top:4rem; background-color: #e9ecef }
</style>