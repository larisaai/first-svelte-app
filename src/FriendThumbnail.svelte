<script>
    import { me } from './data.js'
    export let id;  
    $: name = $me.friends.find( jFriend => jFriend.id == id).name
    $: lastName = $me.friends.find( jFriend => jFriend.id == id).lastName
    $: status = $me.friends.find( jFriend => jFriend.id == id).status
    $: profilePicture = $me.friends.find( jFriend => jFriend.id == id).profilePicture
    let defaultProfile = "https://www.securities-services.societegenerale.com/typo3temp/assets/_processed_/0/6/csm_default-profile_ffd6e2872a.png"

</script>
<!-- ############################################# -->
<section class="friend" >
    <div class="profile-pic-container"> 
        <img class="profile-pic-small" src="{profilePicture ? profilePicture : defaultProfile}" alt="">
        <span class="friend-small-circle" style="background-color:{ status == 1 ? 'green':'black'}"></span>
    </div>
    <h4>{name} {lastName}</h4>
</section>

<!-- ############################################# -->

<style>
    .friend { display: flex; justify-content: flex-start; align-items: center; width: auto; height: 2.3rem; }
    .profile-pic-container { position: relative;}
        .profile-pic-small { width: 2rem; height: 2rem; object-fit: cover; border-radius: 50%;}
        .friend-small-circle { position: absolute; bottom: 0.4rem; right:-0.1rem; width: 0.5rem; height: 0.5rem; background-color: black; border-radius: 50%; border: 1px solid white; }
        .friend h4 { margin-left: 0.5rem;}

</style>