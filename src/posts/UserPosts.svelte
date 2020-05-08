<script>
// import FriendsList from "./FriendsList.svelte"
import PostInput from './PostInput.svelte';
import FriendThumbnail from "./../FriendThumbnail.svelte"
import ThumbsUp from 'svelte-icons/fa/FaThumbsUp.svelte';
import Comment from 'svelte-icons/fa/FaComment.svelte';
import Share from 'svelte-icons/fa/FaShare.svelte';
import ProfileIcon from 'svelte-icons/fa/FaUser.svelte';
import Me from '../components/Me.svelte';


let ajPosts = []
async function getUserPosts(){
    // AWAIT So it wont go though before it has the data - because it will take time
    let connection = await fetch("http://localhost/users/user/posts");
    let data = await connection.json()
    // Put it into the array
    ajPosts = data;
    
    console.log(data)
    
 }

    getUserPosts()

    
</script>
<!-- ############################################# -->
<section class="posts">
		<PostInput/>

       <h2>My posts</h2>
	{#each ajPosts as jPost}
    <div class="post" style="display:{jPost.message ? 'block':'none'} ">
        <Me/>
        <div class="post-text" >
           
            <p>{jPost.message}</p>
        </div>
        <img src={jPost.image} alt="" style="display:{jPost.image ? 'block':'none'} "> 
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
         margin-bottom: 1rem;
         padding: 1rem}
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