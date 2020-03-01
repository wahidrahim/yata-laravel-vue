<template>
  <div id="app">
    <div class="todo-container m-3">
      <b-card>
        <b-form>
          <b-form-input type="text" />
          <b-button class="mt-2" type="submit" variant="primary" block>
            Add
          </b-button>
          <todos />
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos'
import TodosActions from './store/todos/actions/todos-actions'

export default {
  components: {
    Todos
  },
  created() {
    this.$store.dispatch(TodosActions.GET_TODOS)
  }
}
</script>

<style lang="scss" scoped>
.todo-container {
  max-width: 320px;
}
</style>
