<script context="module">
    import SingleChat from './SingleChat.svelte'

    export function ShowChatWindow(){
        document.querySelector(".chats-wrapper").style.display = "flex"
    }    
    export function HideChatWindow(){
        document.querySelector(".chats-wrapper").style.display = "none"
    }
  
</script>
<!-- ################### -->


<section class="chats-wrapper">
    <SingleChat/>
</section>


<!-- ################### -->

<style>
    .chats-wrapper {  
        position: fixed;
        display: none; 
        justify-content: flex-end;
        bottom: 0px;
        width: calc( 100% - 25rem);
    }
	
</style>