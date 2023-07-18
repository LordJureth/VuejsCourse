<template>
    <ul>
        <resource-list-items 
         v-for="resource in resources"
         :key="resource.id"
         :id="resource.id"
         :title="resource.title"
         :description="resource.description"
         :link="resource.link"
         @delete-resource="deleteResource"
        ></resource-list-items>
    </ul>
</template>

<script>
import ResourceListItems from './ResourceItem.vue';

export default {
    props: {
        resources: {
            required: true,
            type: Array
        }
    },
    components: {
        ResourceListItems
    },
    methods: {
        deleteResource() {
            alert('resource deleted!');
        }
    }
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