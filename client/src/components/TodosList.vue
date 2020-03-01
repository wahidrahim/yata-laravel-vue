<template>
  <b-list-group class="todos-list">
    <b-list-group-item v-for="todo in todos" :key="todo.id">
      <b-form-checkbox
        @change="updateTodo(todo.id, $event)"
        :checked="todo.completed"
      >
        <span :class="{ completed: todo.completed }">
          {{ todo.task }}
        </span>
      </b-form-checkbox>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: {
    todos: {
      required: true,
      type: Array
    }
  },
  methods: {
    updateTodo(id, completed) {
      this.$store.dispatch('todos/UPDATE_TODO', { id, completed })
    }
  }
}
</script>

<style lang="scss" scoped>
.todos-list ::v-deep .list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
}

.todos-list ::v-deep .list-group-item .completed {
  text-decoration: line-through;
}
</style>
