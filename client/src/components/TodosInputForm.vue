<template>
  <div class="todos-input">
    <b-form @submit.prevent="addTodo">
      <b-form-input v-model="task" type="text" />
      <b-button class="mt-3" type="submit" variant="primary" block>
        Add
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('todos/ADD_TODO', this.task)

      this.task = ''
    }
  }
}
</script>
