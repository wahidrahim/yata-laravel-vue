<template>
  <b-list-group class="todos-list">
    <b-list-group-item
      class="todo-list-item"
      v-for="todo in todos"
      :key="todo.id"
    >
      <b-form-checkbox
        class="d-inline-block"
        @change="updateTodo(todo, $event)"
        :checked="todo.completed"
      >
        <span :class="{ completed: todo.completed }">
          {{ todo.task }}
        </span>
      </b-form-checkbox>
      <span class="icon" @click='destroyTodo(todo)'>
        <b-icon icon="trash" />
      </span>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  components: {
    BIcon
  },
  props: {
    todos: {
      required: true,
      type: Array
    }
  },
  methods: {
    updateTodo(todo, completed) {
      this.$store.dispatch('todos/TOGGLE_COMPLETE', { todo, completed })
    },

    destroyTodo(todo) {
      this.$store.dispatch('todos/DESTROY', todo)
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
