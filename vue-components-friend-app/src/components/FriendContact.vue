<template>
    <li>
      <h2>{{ name }} {{ favouriteText }}</h2>
      <button v-on:click="toggleFavourite()">Toggle Favourite</button>
      <button v-on:click="toggleDetails()">{{ detailsButtonText }}</button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ phone }}
        </li>
        <li>
          <strong>Email:</strong>
          {{ email }}
        </li>
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        isFavourite: {
            type: Boolean,
            required: true,
        },
    },
    emits: {
        'toggle-favourite': function (id) {
            if (!id) {
                console.warn('Toggle Favourite ID is missing');
                return false;
            }

            return true;
        },
    },  
    data: function () {
      return {
        detailsAreVisible: false,
      };
    },
    computed: {
        detailsButtonText: function () {
            return !this.detailsAreVisible ? 'Show Details' : 'Hide Details';
        },
        favouriteText: function () {
            return this.isFavourite ? '(Favourite)' : '';
        },
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavourite() {
        this.$emit('toggle-favourite', this.id);
      },
    }
  };
  </script>