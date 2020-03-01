<template>
  <div id="app">
    <div class="todo-container m-3">
      <b-card>
        <b-form>
          <todos-input />
          <todos />
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import TodosInput from './components/TodosInput'
import Todos from './components/Todos'

export default {
  components: {
    TodosInput,
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
