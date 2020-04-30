<script>
// import FriendsList from "./FriendsList.svelte"
import FriendThumbnail from "./../FriendThumbnail.svelte"
import {ajPosts} from './../data.js'
    
</script>
<!-- ############################################# -->
<section class="posts">
    <!-- <h1>Posts</h1> -->
	{#each $ajPosts as jPost}
    <div class="post">
        <div class="post-text">
            <p class=""><FriendThumbnail id={jPost.friendId}/></p>
            <p style="display:{jPost.title ? 'block':'none'} ">{jPost.title}</p>
        </div>

        <img src={jPost.body.image} alt="" style="display:{jPost.body.image ? 'block':'none'} "> 
    
    </div>
    {/each}
</section>

<!-- ############################################# -->

<style>
    .posts { display: grid; grid-gap: 0.5rem; padding: 1rem; max-width: 750px; margin: auto;}
    .post img { width: 100%;}
     .post { background-color: white; }
        .post-text { padding: 1rem 1.5rem}
   
</style>