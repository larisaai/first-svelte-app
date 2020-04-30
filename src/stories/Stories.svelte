<script>
    import { me } from './data.js'
    import {ajStories} from './../data.js'

    import FriendThumbnail  from './FriendThumbnail.svelte'
    $: name = $me.friends.find( jFriend => jFriend.id == id).name
    $: lastName = $me.friends.find( jFriend => jFriend.id == id).lastName
    $: status = $me.friends.find( jFriend => jFriend.id == id).status
    $: profilePicture = $me.friends.find( jFriend => jFriend.id == id).profilePicture
    let defaultProfile = "https://www.securities-services.societegenerale.com/typo3temp/assets/_processed_/0/6/csm_default-profile_ffd6e2872a.png"

</script>
<!-- ############################################# -->
<section class="stories" >
  <div class="story"></div>
</section>

<!-- ############################################# -->

<style>
    
</style>