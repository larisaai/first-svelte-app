<script>
// import FriendsList from "./FriendsList.svelte"
    import {me} from './../data.js'
    import FriendThumbnail from "./../FriendThumbnail.svelte"
    import Profile from 'svelte-icons/fa/FaUser.svelte';


  
</script>
<!-- ############################################# -->
    <div class="post">
            <div class="pofile-name">
                <img class="profile-pic-small" src="{$me.profilePicture}" alt="">
                <h5 class="name">{$me.name} {$me.lastName}</h5>
            </div>
            <form>
                <input type="text" placeholder="What us in yout mind?"/>

                <input type="file" name="file" id="file" class="inputfile" multiple/>
                <label for="file">Photo/Video</label>

                <input type="select" name="Feeling" id="Feeling" class="inputfile" />
                <label class="Feeling">Feeling/Activity</label>
                <button>Post</button>
            
            </form>
        </div>
<!-- ############################################# -->

<style>
   .post { 
       position: relative;
       background: white; 
       padding: 1rem; 
       }

   input { 
       border: 1px solid lightgray;  
       color: lightgray;
       min-height:4rem;
       max-height: 5rem; 
       min-width: 100%; 
       max-width: 100%; 
       padding: 1rem; 
       margin-bottom: 1rem; 
       }
       input::placeholder {
       color: lightgray;
       }
       input:focus {
       color: black;
       }
   button { 
       color: white; 
       background: grey; 
       border: none; 
       border-radius: 0.5rem; 
       padding: 0.5rem 1em; 
       position: absolute;
       bottom: 1rem;
       right: 1rem;
    }

     .profile-pic-small { 
         width: 2rem; 
         height: 2rem; 
         object-fit: cover; 
         border-radius: 50%; 
         margin-right: 1rem; 
        }
    .pofile-name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem;
    }
        .inputfile {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }
        .inputfile + label {
            font-size: 1rem;
            color: darkgray;
            border: 1px solid lightgray;
            display: inline-block;
            padding: 0.5rem;
            border-radius: 0.5rem;
        }

        /* .inputfile:focus + label,
        .inputfile + label:hover {
             background-color: red; 
        } */
        .inputfile + label {
            cursor: pointer; /* "hand" cursor */
        }

</style>