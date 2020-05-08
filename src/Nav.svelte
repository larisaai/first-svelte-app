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
import { Router, Link, Route } from "svelte-routing";
import Home from './routes/Home.svelte';
import ProfilePage from './routes/Profile.svelte';
import Watch from './routes/Watch.svelte';
import MarketPage from './routes/MarketPage.svelte';
import GroupsPage from './routes/GroupsPage.svelte';
export const url = "";
import Me from './components/Me.svelte'


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
<Router url="{url}">
<section class="nav">
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
            <div>{jUser.firstName} {jUser.lastName}</div>
        {/each }
    </div>
  </div>
  </div> 
	
	<nav class="navC2">
		<Link to="/"><div class="nav2-icon"><House/></div></Link>
		<Link to="watch"><div class="nav2-icon"><Video/></div></Link>
		<Link to="market"><div class="nav2-icon"><Market/></div></Link>
		<Link to="groups"><div class="nav2-icon"><GroupOfPeople/></div></Link>
          <i></i> 
  	</nav>

  <div class="navC3">
        <Link to="profile"><Me/> </Link>
        <div class="icon-container"><Plus/></div>
        <div class="icon-container"><Messenger/></div>
        <div class="icon-container"><Bell/></div>
        <div class="icon-container"><ArrowDown/></div>
  </div>

</section> 
	<div>
		<Route path="profile" component="{ProfilePage}" />
		<Route path="watch" component="{Watch}" />
        <Route path="market" component="{MarketPage}" />
		<Route path="groups" component="{GroupsPage}" />
		<Route path="/"><Home /></Route>
  	</div>
</Router>


<!-- ########################################## -->


<style>
.nav2-icon {
    color: black;
}
    .nav {
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
        grid-template-columns: 1fr 15fr;
    }

    .nav form input {
        text-align: center;
        background: transparent;
        display: flex;
        align-items: center;
    }
    .nav div.searchContainer {
        position: relative;
    }
    .nav div.searchResultsContainer {
        position: absolute;
        width: 100%;
        height: auto;
        background: white;
        color: #333;
        border: 1px solid #999;
        border-top: none;
        padding: 0px 0.2rem;
        
    }
    .nav i {
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
 

</style>
