<template>
  <b-list-group>
    <b-list-group-item v-for='todo in todos' :key='todo.id'>
      {{ todo.task }}
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
  }
}
</script>
