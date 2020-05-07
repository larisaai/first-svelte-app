<script>
// import FriendsList from "./FriendsList.svelte"
import PostInput from './PostInput.svelte';
import FriendThumbnail from "./../FriendThumbnail.svelte"
import ThumbsUp from 'svelte-icons/fa/FaThumbsUp.svelte';
import Comment from 'svelte-icons/fa/FaComment.svelte';
import Share from 'svelte-icons/fa/FaShare.svelte';

import {ajPosts} from './../data.js'
    
</script>
<!-- ############################################# -->
<section class="posts">
		<PostInput/>

    <!-- <h1>Posts</h1> -->
	{#each $ajPosts as jPost}
    <div class="post">
        <div class="post-text">
            <p class=""><FriendThumbnail id={jPost.friendId}/></p>
            <p style="display:{jPost.title ? 'block':'none'} ">{jPost.title}</p>
        </div>
        <img src={jPost.body.image} alt="" style="display:{jPost.body.image ? 'block':'none'} "> 
         <div class="bottom-icons-container">
            <div class="icon-container"><ThumbsUp/></div>
            <div class="icon-container"><Comment/></div>
            <div class="icon-container"><Share/></div>
        </div>
    </div>
    {/each}
</section>

<!-- ############################################# -->

<style>
    .posts { 
        display: grid;
        grid-gap: 0.5rem;
        padding: 1rem;
        max-width: 750px;
        margin: auto;
        }
    .post img { 
        width: 100%;
        }
     .post { 
         background-color: white; 
         margin-bottom: 1rem;}
    .post-text { 
        padding: 1rem 1.5rem;
        }
   .bottom-icons-container {
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: 4rem;
       border-top: 1px solid lightgray;
       width: 97%;
       margin: auto;

   }
   .icon-container {
       height: 2rem;
        opacity: 0.5;
   }
   .icon-container:hover {
        opacity: 1;
   }
</style>