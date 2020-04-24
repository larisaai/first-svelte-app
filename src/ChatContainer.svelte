<script context="module">
    

    export function ShowChatWindow(){
        document.querySelector(".chats-wrapper").style.display = "flex"
    }
  
</script>
<!-- ################### -->


<section class="chats-wrapper">
    <div class="chat-container">
    </div>
</section>


<!-- ################### -->

<style>
    .chats-wrapper {  
        position: fixed;
        display: none; 
        justify-content: flex-end;
        bottom: 0px;
        width: calc( 100% - 15rem);
    }
	.chat-container {
        width: 20rem;
        height: 25rem;
        background: red;

    }
</style>