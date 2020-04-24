<script>
import ChatContainer, { ShowChatWindow } from './ChatContainer.svelte'

  let ajFriends = [
    {"_id":"5e9edd3636b92723a03e06ef","name":"A","lastName":"AA"},
    {"_id":"5ea15c9ba266660db4ead82c","name":"B","lastName":"BB"},
    {"_id":"5ea15ca5a266660db4ead82d","name":"C","lastName":"CC"}
  ]
//   const showChat = () => {
// 	// console.log("showing chat window")
//   }

  function showChat(displayVal){
	  let displayChat = "none";
    	  ShowChatWindow("flex");

    }

</script>

<!-- ############################## -->

<section class="online-friends">
	<h3> Contacts</h3>
	{#each ajFriends as jFriend}
		<div class="friend" on:click="{showChat}">:) {jFriend.name} {jFriend.lastName}</div>
	{/each}
</section>

<!-- ############################## -->

<style>
  .online-friends{
    position: fixed;
    top: 4rem;
    right: 0px;
    width: 15rem;
	height: 100%;
	padding: 1rem;
    background: gray;
  }
  /* ugly - should show a nice hand so users know that they have to click */
  div.friend{
    cursor: pointer;
  }
</style>