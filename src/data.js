

import {writable} from "svelte/store";

export let me = writable(
    {
    "name":"Larisa",
    "lastName":"Ailisoaie",
    "profilePicture": "https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/p720x720/69650094_2965185760220141_2999590522277855232_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=3frqEf-P1qUAX_ec4sc&_nc_ht=scontent-cph2-1.xx&_nc_tp=6&oh=83a8715e7dd1c1a11aa9d20d7464739e&oe=5ECF5633", 
    "friends": [
        { "id":1, "name":"Marius","lastName":"Alisoaie", "status":"1", "profilePicture":"https://www.usacustomjackets.com/wp-content/uploads/2016/07/smiley-face.png" },
        { "id":2, "name":"Naomi","lastName":"Dobran", "status":"0"  },
        { "id":3, "name":"Santiago","lastName":"Donosso", "status":"1", "profilePicture": "https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/42207938_10156793413569669_3392455896717066240_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=9ZRWjC0YWVwAX8u7gXW&_nc_ht=scontent-cph2-1.xx&oh=c36aec70a0979717c23b54ae02590646&oe=5ED28457" }
],
"shortcuts": [
    { "id":1, "shortcutName":"Messenger",},
    { "id":2, "shortcutName":"Events", },
    { "id":3, "shortcutName":"Marketpace", },
    { "id":4, "shortcutName":"Covid", }
],
"groups": [
    { "id":1, "groupName":"Web dev", "image":"https://icdn2.digitaltrends.com/image/digitaltrends/facebook-redesign-newsfeed-700x467-c.jpg"},
    { "id":2, "groupName":"MMD tutors", "image": " https://icdn2.digitaltrends.com/image/digitaltrends/facebook-redesign-newsfeed-700x467-c.jpg" },
    { "id":3, "groupName":"Healty recepies", }
]
})

export let ajPosts = writable([
    { "id":1, "friendId":1, "body": {"image": "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=2000&hei=1100&scl=3.68" } },
    { "id":2, "friendId":1, "title":"here you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long text", "body": {} },
    { "id":3, "friendId":2, "title":"here you go with a post with long text and an image", "body":{"image": "https://www.commondreams.org/sites/default/files/styles/cd_large/public/headlines/rights_of_nature_sweden.jpg?itok=XitGx3Y9" }},
    { "id":4, "friendId":3, "body": {"image": "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=2000&hei=1100&scl=3.68" } },
    { "id":5, "friendId":1, "title":"here you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long texthere you go with a post with long text", "body": {} },
    { "id":6, "friendId":3, "title":"here you go with a post with long text and an image", "body":{"image": "https://www.commondreams.org/sites/default/files/styles/cd_large/public/headlines/rights_of_nature_sweden.jpg?itok=XitGx3Y9" }}
  
])

export let ajStories = writable([
    { "id":1, "friendId":1, "image": "https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg"  },
    { "id":2, "friendId":2, "image": "https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg" },
    { "id":3, "friendId":1, "image": "https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg"  },
    { "id":4, "friendId":2, "image": "https://www.energylivenews.com/wp-content/uploads/2014/06/Smiley-face-emoticon-575.jpg" }
    
])

