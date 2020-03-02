<template>
  <b-list-group class="todos-list">
    <b-list-group-item
      class="todo-list-item"
      v-for="todo in todos"
      :key="todo.id"
    >
      <!-- Toggle Todo completion -->
      <b-form-checkbox
        class="d-inline-block"
        @change="toggleComplete(todo, $event)"
        :checked="todo.completed"
      >
        <span :class="{ completed: todo.completed }">
          {{ todo.task }}
        </span>
      </b-form-checkbox>

      <!-- Togggle archiving Todos -->
      <span
        class="icon-archive ml-auto mr-3"
        v-if="todo.archived"
        @click="toggleArchive(todo)"
      >
        <b-icon icon="arrow-counterclockwise" />
      </span>
      <span
        class="icon-archive ml-auto mr-3"
        v-else
        @click="toggleArchive(todo)"
      >
        <b-icon icon="archive" />
      </span>

      <!-- Delete Todo item -->
      <span class="icon-delete" @click="destroyTodo(todo)">
        <b-icon icon="backspace" />
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
    toggleComplete(todo, completed) {
      this.$store.dispatch('todos/TOGGLE_COMPLETE', { todo, completed })
    },

    toggleArchive(todo) {
      this.$store.dispatch('todos/TOGGLE_ARCHIVE', todo)
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

.todo-list-item {
  display: flex;

  .icon-archive:hover {
    color: var(--primary);
  }

  .icon-delete:hover {
    color: var(--danger);
  }
}
</style>
