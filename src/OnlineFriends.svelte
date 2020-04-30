<script>
import ChatContainer, { ShowChatWindow } from './ChatContainer.svelte'
import FriendThumbnail  from './FriendThumbnail.svelte'
import {me} from './data.js'

async function getUsers(){
    ajUsers = []
    // AWAIT So it wont go though before it has the data - because it will take time
    let connection = await fetch("http://localhost/users");
    let data = await connection.json()
    // Put it into the array
    ajUsers = data;
    // Calling the showSearchResults function, to show the searchcontainer
    showSearchResults()
    // Shows what we search for in the console
    console.log(data)
    
 }

  function showChat(displayVal){
	  let displayChat = "none";
    	  ShowChatWindow("flex");

    }

</script>

<!-- ############################## -->

<section class="online-friends">
	<h3> Contacts</h3>
	{#each $me.friends as jFriend}
		<!-- <div class="friend" on:click="{showChat}">:) {jFriend.name} {jFriend.lastName}</div> -->
  
      <div class="friend" on:click="{showChat}"> <FriendThumbnail id={jFriend.id}/> </div>
	{/each}
</section>

<!-- ############################## -->

<style>
  .online-friends{
    position: fixed;
    top: 4rem;
    right: 0px;
    width: 25rem;
    height: 100%;
    padding: 2rem;
    background: #e9ecef;
    border-left: 1px solid darkgray;
  }
  /* ugly - should show a nice hand so users know that they have to click */
  div.friend{
    cursor: pointer;
    margin: 0.5rem 0;
  }
</style>