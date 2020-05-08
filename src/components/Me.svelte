<script>
import ProfileIcon from 'svelte-icons/fa/FaUser.svelte';

let ajUsers= {}
async function getUserDetails(){
    // AWAIT So it wont go though before it has the data - because it will take time
    let connection = await fetch("http://localhost/users/user-details");
    let data = await connection.json()
    // Put it into the array
    ajUsers = data;
    
    console.log(data)
    
 }

    getUserDetails()



</script>
<!-- ############################################# -->
<div class="">


    <div class="pofile-name">
        <!-- <div style="display: {ajUsers.profilePicture ? "none": "block"}"> <ProfileIcon /></div> -->
        <img class="profile-pic-small" src="{ajUsers.profilePicture}" alt="">
       
        <h5 class="name">{ajUsers.firstName} {ajUsers.lastName} </h5>
    </div> 


</div>

<!-- ############################################# -->

<style>

.pofile-name {
    display: flex;
    justify-content: flex-start;
}
        .profile-pic-small { 
            width: 2rem; 
            height: 2rem; 
            object-fit: cover; 
            border-radius: 50%;
            margin-right: 0.5rem
            }

</style>