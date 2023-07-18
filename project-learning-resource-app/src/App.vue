<template>
    <the-header></the-header>
    <storedResources :resources="storedResources"></storedResources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import storedResources from './components/resources/StoredResource.vue';

export default {
    components: {
        TheHeader,
        storedResources,
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'offical-guide',
                    title: 'Official Guide',
                    description: 'The official documentation for Vue.js',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to Google!',
                    link: 'https://www.google.co.uk'
                }
            ],
        };
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>