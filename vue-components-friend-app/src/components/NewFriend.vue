<template>
    <form v-on:submit.prevent="addFriend()">
        <div>
            <label for="name">Name:</label>
            <input v-model="name" id="name" name="name" type="text" autocomplete="name">
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input v-model="phone" id="phone" name="phone" type="tel" autocomplete="phone">
        </div>
        <div>
            <label for="email">Email:</label>
            <input v-model="email" id="email" name="email" type="email" autocomplete="email">
        </div>
        <div>
            <label for="checkbox">Favourite:</label>
            <input type="checkbox" id="checkbox" name="isFavourite" v-model="isFavourite" autocomplete="isFavourite" />
        </div>
        <div>
            <button type="submit">Add Friend</button>
        </div>
    </form>
</template>

<script>
    export default {
        data: function () {
            return {
                name: '',
                phone: '',
                email: '',
                isFavourite: '',
            };
        },
        emits: {
            'add-new-friend': function (name, phone, email, isFavourite) {
                if (
                    name === '' ||
                    phone === '' ||
                    email === '' ||
                    isFavourite === ''
                ) {
                    console.warn('Friend Information Missing!');

                    return false;
                }
                
                return true;
            }
        },
        methods: {
            addFriend: function () {
                this.$emit(
                    'add-new-friend',
                    this.name,
                    this.phone,
                    this.email,
                    this.isFavourite
                );
            }
        }
    };
</script>

<style>
    #app input {
        font: inherit;
        padding: 0.15rem;
    }
    #app label {
        font-weight: bold;
        margin-right: 1rem;
        width: 7rem;
        display: inline-block;
    }
    #app form div {
        margin: 1rem 0;
    }
</style>