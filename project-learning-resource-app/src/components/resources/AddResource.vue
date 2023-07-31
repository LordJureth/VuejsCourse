<template>
    <header>
      <teleport to='body'>
        <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close-dialog="resetError">
          <template #default>
            <p>
              One or more fields are missing. Please fill in all fields.
            </p>
          </template>
        </base-dialog>
      </teleport>
      <base-card>
        <form @submit.prevent="submitData">
          <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" ref="titleInput">
          </div>
          <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
          </div>
          <div class="form-control">
            <label for="link">Link</label>
            <input type="url" id="link" name="link" ref="linkinput">
          </div>
          <div>
              <base-button type="submit">Add Resource</base-button>
          </div>
        </form>
        </base-card>
    </header>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false,
        }
    },
    methods: {
        submitData() {
            const title = this.$refs.titleInput.value;
            const description = this.$refs.descriptionInput.value;
            const link = this.$refs.linkinput.value;

            if (
                title.trim() === '' ||
                description.trim() === '' ||
                link.trim() === ''
            ) {
                this.inputIsInvalid = true;

                return;
            }

            this.addResource(title, description, link);
        },
        resetError() {
            this.inputIsInvalid = false;
        }
    }
};
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>