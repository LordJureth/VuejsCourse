<template>
  <li>
    <base-card>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <base-button
            @click='removeResource(id)'
            :buttonText='Delete'
            :type=submit
            :mode=flat
          >
            Delete
          </base-button>
        </header>
        <p>{{ description }}</p>
        <nav>
          <a :href='link' target='_blank'>View Resource</a>
        </nav>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    }
  },
  inject: [
    'removeResource'
  ]
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>