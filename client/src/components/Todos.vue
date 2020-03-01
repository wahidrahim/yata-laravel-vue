<template>
  <b-tabs class="mt-3" content-class="mt-3">
    <b-tab title="Current" active>

      <pre>{{ current }}</pre>
    </b-tab>
    <b-tab title="Archived">
      <pre>{{ archived }}</pre>
    </b-tab>
  </b-tabs>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('todos', ['current', 'archived'])
  }
}
</script>
