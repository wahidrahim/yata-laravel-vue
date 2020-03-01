<template>
  <div id="app">
    <div class="todo-container m-3">
      <b-card>
        <todos-input-form />
        <todos />
      </b-card>
    </div>
  </div>
</template>

<script>
import TodosInputForm from './components/TodosInputForm'
import Todos from './components/Todos'

export default {
  components: {
    TodosInputForm,
    Todos
  },
  created() {
    this.$store.dispatch('todos/GET_TODOS')
  }
}
</script>

<style lang="scss" scoped>
.todo-container {
  max-width: 320px;
}
</style>
