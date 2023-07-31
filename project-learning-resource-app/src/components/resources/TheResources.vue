<template>
    <base-card>
        <base-button
            @click="setSelectedTab('stored-resources')" 
            :mode="storedResourcesButtonMode"
        >
        Stored Resource</base-button>
        <base-button 
            @click="setSelectedTab('add-resource')" 
            :mode="addResourcesButtonMode"
            @newResource.prevent="addNewResource"
        >
        Add Resource</base-button>
    </base-card>
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>

<script>
import storedResources from './StoredResource.vue';
import addResource from './AddResource.vue';

export default {
    components: {
        storedResources,
        addResource
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addNewResource,
            removeResource: this.removeResource,
        }
    },
    data() {
        return {
            selectedTab: 'stored-resources',
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
    },
    computed: {
        storedResourcesButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourcesButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    },
    methods: {
        setSelectedTab(resource) {
            this.selectedTab = resource;
        },
        addNewResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            };

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(id) {
          const resourceIndex = this.storedResources.findIndex(resource => resource.id === id);
          this.storedResources.splice(resourceIndex, 1);
        }
    }
}
</script>