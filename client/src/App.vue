<template>
  <div id="app">
    <div class="todo-container m-3">
      <b-card>
        <b-form>
          <b-form-input type="text" />
          <b-button class="mt-2" type="submit" variant="primary" block>
            Add
          </b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo-container {
  max-width: 320px;
}
</style>
