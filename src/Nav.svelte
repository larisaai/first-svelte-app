<script>
import Fb from 'svelte-icons/fa/FaFacebook.svelte';
import Messenger from 'svelte-icons/fa/FaFacebookMessenger.svelte';
import House from 'svelte-icons/fa/FaHome.svelte';
import Video from 'svelte-icons/fa/FaYoutube.svelte';
import Market from 'svelte-icons/fa/FaStore.svelte';
import GroupOfPeople from 'svelte-icons/fa/FaUsers.svelte';
import Profile from 'svelte-icons/fa/FaUser.svelte';
import Plus from 'svelte-icons/fa/FaPlus.svelte';
import Bell from 'svelte-icons/fa/FaBell.svelte';
import ArrowDown from 'svelte-icons/fa/FaSortDown.svelte';
import SearchIcon from 'svelte-icons/fa/FaSearch.svelte';
// import House from 'svelte-icons/fa/FaWarehouse.svelte';

import { me } from './data.js'


let txtSearch = "";
let ajUsers = []
let searchResultsDisplay = "none";
function showSearchResults() {
    searchResultsDisplay = "grid";
}
function hideSearchResults(){
    searchResultsDisplay = "none";
}
    
async function getUsers(){
    ajUsers = []
    // AWAIT So it wont go though before it has the data - because it will take time
    let connection = await fetch("http://localhost/users?searchFor="+txtSearch);
    let data = await connection.json()
    // Put it into the array
    ajUsers = data;
    // Calling the showSearchResults function, to show the searchcontainer
    showSearchResults()
    // Shows what we search for in the console
    console.log(data)
    
 }

</script>
<!-- ################### -->

<nav>
  <div class="navC1">
    <div class="icon">
        <Fb />
    </div>
    <div class="searchContainer">
    <form>
        <div class="search">
            <SearchIcon class="search-icon"/>
            <input type="text" placeholder="Seach on Clonebook ..." bind:value="{txtSearch}" on:input="{getUsers}" on:focus="{getUsers}" on:blur="{hideSearchResults}">
        </div>
    </form>

    <div style="display: {searchResultsDisplay}" class="searchResultsContainer">
        {#each ajUsers as jUser }
            <div>{jUser.name} {jUser.lastName}</div>
        {/each }
    </div>
  </div>
  </div> 
  <div class="navC2">
    <House/>
    <Video/>
    <Market/>
    <GroupOfPeople/>
    <i></i>
  </div>
  <div class="navC3">
        
        <div class="pofile-name">
            <div style="display: {$me.profilePicture ? "none": "block"}"> <Profile /></div>
            <img class="profile-pic-small" src="{$me.profilePicture}" alt="">
            <h5 class="name">{$me.name} </h5>
        </div>
        <div class="icon-container"><Plus/></div>
        <div class="icon-container"><Messenger/></div>
        <div class="icon-container"><Bell/></div>
        <div class="icon-container"><ArrowDown/></div>
  </div>

</nav> 


<!-- ########################################## -->


<style>
    nav {
        position: fixed;
        display: grid;
        grid-template-columns: 10fr 20fr 10fr;
        grid-gap: 0.2rem;
        align-items: center;
        width: 100%;
        height: 4rem;
        padding: 0px 0.5rem;
        color: black;
        background: white;
        /* background: #4267b2; */
        box-shadow: 0 1px 7px rgba(155, 155, 155, 0.12), 0 1px 2px rgba(155, 155, 155, 0.12);
        top: -0.1rem;
        z-index: 10;
    }
    .navC1 {
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
    .navC2 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            max-width: 400px;
            margin: 0 auto;
            grid-gap: 50px;
    }
    .navC3 {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        align-items: center;
    }
    .search {  
        max-height: 35px;
        background: lightgray;
        padding: 0.5rem 1.5rem;
        border-radius:1rem;
        display: grid;
        grid-template-columns: 1fr 10fr;
    }

    nav form input {
        text-align: center;
        background: transparent;
        display: flex;
        align-items: center;
    }
    nav div.searchContainer {
        position: relative;
    }
    nav div.searchResultsContainer {
        position: absolute;
        width: 100%;
        height: auto;
        background: white;
        color: #333;
        border: 1px solid #999;
        border-top: none;
        padding: 0px 0.2rem;
        
    }
    nav i {
        width: 30px;
        height: 30px;
    }
    .icon-container {
        background: lightgray;
        border-radius: 50%;
        width: 35px;
        height:35px;
        padding: 0.5rem
    }
    .icon-container > * {
        display: flex;
        align-items: center;
    }
    .pofile-name {
        display: grid;
        grid-template-columns: 1fr 2fr; 
        align-items: center;
        }


</style>
