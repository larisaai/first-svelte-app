<script>
// import FriendsList from "./FriendsList.svelte"
    import FriendThumbnail from "./../FriendThumbnail.svelte"
    import {ajPosts} from './../data.js'
    export let id;  
    $: friendId = $ajPosts.find( jPost => jPost.id == id).friendId
    $: title = $ajPosts.find( jPost => jPost.id == id).title
    $: image = $ajPosts.find( jPost => jPost.id == id).body.image
  
</script>
<!-- ############################################# -->
    <div class="post">
        <div class="post-text">
            <p class=""><FriendThumbnail id={friendId}/></p>
            <p style="display:{title ? 'block':'none'} ">{title}</p>
        </div>
        <img src={image} alt="" style="display:{image ? 'block':'none'} "> 
    
    </div>

<!-- ############################################# -->

<style>
    .post img { width: 100%;}
     .post { background-color: white; }
        .post-text { padding: 1rem 1.5rem}
</style>