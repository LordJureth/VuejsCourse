<template>
    <ul>
        <resource-list-items 
         v-for="resource in resources"
         :key="resource.id"
         :id="resource.id"
         :title="resource.title"
         :description="resource.description"
         :link="resource.link"
        ></resource-list-items>
    </ul>
</template>

<script>
import ResourceListItems from './ResourceItem.vue';

export default {
    inject: ['resources'],
    components: {
        ResourceListItems
    },
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>