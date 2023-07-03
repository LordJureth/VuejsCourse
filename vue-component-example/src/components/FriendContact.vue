<template>
    <li>
      <h2>{{ friend.name }}</h2>
      <button v-on:click="toggleDetails()">{{ detailsButtonText }}</button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ friend.phone }}
        </li>
        <li>
          <strong>Email:</strong>
          {{ friend.email }}
        </li>
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    props: [
        'friend',
    ],
    data() {
      return {
        detailsAreVisible: false,
      };
    },
    computed: {
        detailsButtonText: function () {
            return !this.detailsAreVisible ? 'Show Details' : 'Hide Details';
        },
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    }
  };
  </script>