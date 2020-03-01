<template>
  <div id="app">
    <div class="todos-container m-3">
      <b-card>
        <todos-input-form />
        <todos-tabs />
      </b-card>
    </div>
  </div>
</template>

<script>
import TodosInputForm from './components/TodosInputForm'
import TodosTabs from './components/TodosTabs'

export default {
  components: {
    TodosInputForm,
    TodosTabs
  },
  created() {
    this.$store.dispatch('todos/GET_TODOS')
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;

  .todos-container {
    max-width: 480px;
    flex-grow: 1;
  }
}
</style>
