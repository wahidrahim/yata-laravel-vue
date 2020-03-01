<template>
  <b-tabs class="mt-3" content-class="mt-3">
    <b-tab title="Current" active>
      <todos-list :todos='current' />
    </b-tab>
    <b-tab title="Archived">
      <todos-list :todos='archived' />
    </b-tab>
  </b-tabs>
</template>

<script>
import { mapGetters } from 'vuex'

import TodosList from './TodosList'

export default {
  components: {
    TodosList
  },
  computed: {
    ...mapGetters('todos', ['current', 'archived'])
  }
}
</script>
