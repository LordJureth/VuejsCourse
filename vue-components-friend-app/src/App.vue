<template>
    <section>
      <header>
        <h1>My Friends</h1>
      </header>
      <new-friend v-on:add-new-friend="addNewFriend"></new-friend>
      <ul>
        <friend-contact 
            v-for="friend in friends"
            :id="friend.id"
            :name="friend.name" 
            :phone="friend.phone" 
            :email="friend.email" 
            :is-favourite="friend.isFavourite" 
            :key="friend.id"
            v-on:toggle-favourite="toggleFavourite"
            v-on:delete="deleteContact"
        ></friend-contact>
      </ul>
    </section>
  </template>
  
<script>
    export default {
        data() {
            return {
                friends: [
                    {
                        id: 1,
                        name: "Mike Wizowski",
                        phone: "0123 45678 90",
                        email: "mike@monstersink.com",
                        isFavourite: true,
                    },
                    {
                        id: 2,
                        name: "James P Sullivan",
                        phone: "0987 654421 21",
                        email: "james@monstersink.com",
                        isFavourite: false,
                    },
                ],
            };
        },
        methods: {
            toggleFavourite: function (id) {
                const identifiedFriend = this.friends.find(
                    friend => friend.id === id
                );
                identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
            },
            addNewFriend: function (name, phone, email, isFavourite) {
                const newFriend = {
                    id: Math.floor(Math.random() * 100),
                    name: name,
                    phone: phone,
                    email: email,
                    isFavourite: isFavourite
                };
                this.friends.push(newFriend);
            },
            deleteContact(friendId) {
                console.log(friendId);
                this.friends = this.friends.filter((friend) => friend.id !== friendId);
            },
        }
    };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Jost', sans-serif;
    }

    body {
        margin: 0;
    }

    header {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1rem;
        background-color: #58004d;
        color: white;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    #app li,
    #app form {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 1rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #58004d;
        margin: 0 0 1rem 0;
    }

    #app button {
        font: inherit;
        cursor: pointer;
        border: 1px solid #ff0077;
        background-color: #ff0077;
        color: white;
        padding: 0.05rem 1rem;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }
</style>