<script>
    import ChatContainer, { HideChatWindow } from './ChatContainer.svelte'
    import { me } from './data.js'
    import FriendThumbnail  from './FriendThumbnail.svelte'


    function HideChat(displayVal){
        HideChatWindow();
    }

</script>
<!-- ############################################# -->
<section class="chat" >
  <div class="chat-header">
  <span class="close-header-icon" on:click="{HideChat}">x</span>
    <p>friend's name </p>
    <!-- <FriendThumbnail/>  -->
  </div>
</section>

<!-- ############################################# -->

<style>
    .chat {
        width: 20rem;
        height: 25rem;
        background: white;
        border-radius: 5px 5px 0 0;
    }
    .chat-header { 
        position: relative;
        height: 3.5rem;
        width: 100%; 
        background-color: teal; 
        color: white;
        padding: 1rem;
        border-radius: 5px 5px 0 0;
    }
        .close-header-icon {
            position: absolute;
            right: 1rem;
            top: 1rem;
            cursor: pointer;
         }
</style>