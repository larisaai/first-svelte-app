<script>
import ChatContainer, { ShowChatWindow } from './ChatContainer.svelte'
import FriendThumbnail  from './FriendThumbnail.svelte'
// import {me} from './data.js'

   let ajUsers = []
async function getUsers(){
    // AWAIT So it wont go though before it has the data - because it will take time
    let connection = await fetch("http://localhost/users/user/friends");
    let data = await connection.json()
    // Put it into the array
    ajUsers = data;
    
    console.log(data)
    
 }

  function showChat(displayVal){
	  let displayChat = "none";
    	  ShowChatWindow("flex");

    }
    getUsers()

</script>

<!-- ############################## -->

<section class="online-friends">
	<h3> Contacts</h3>
	{#each ajUsers as jFriend}
		<div class="friend" on:click="{showChat}">
      <div class="profile-pic-container">
			<img class="profile-pic-small" src="{jFriend.profilePicture}" alt="profile picture">
			<span class="friend-small-circle" style="background-color:{ jFriend.onlineStatus == true ? 'green':'black'}"></span>
      </div>
	  {jFriend.firstName} {jFriend.lastName}
     </div>
  
      <!-- <div class="friend" on:click="{showChat}"> <FriendThumbnail id={jFriend.id}/> </div> -->
	{/each}
</section>

<!-- ############################## -->

<style>
  .online-friends{
    position: fixed;
    top: 4rem;
    right: 0px;
    width: 20rem;
    height: 100%;
    padding: 2rem;
    background: #e9ecef;
    border-left: 1px solid lightgray;
  }
  /* ugly - should show a nice hand so users know that they have to click */
  div.friend{
    position: relative;
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 2.3rem; 
    cursor: pointer;
    margin: 0.5rem 0;
  }
    .profile-pic-container { 
		position: relative;
		margin-right: 1rem; }

    .friend-small-circle { 
		position: absolute;
		bottom: 0.4rem;
		right:-0.1rem;
		width: 0.5rem;
		height: 0.5rem;
		background-color: black;
		 border-radius: 50%;
		  border: 1px solid white; }

    .profile-pic-small { 
		width: 2rem;
		height: 2rem;
		object-fit: cover;
		border-radius: 50%;
			}

</style>