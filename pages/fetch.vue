<template>
  <div>
    <button @click="$store.commit('setPosts')">
      {{ $store.state.counter }}
    </button>
    <button @click="fetch">123</button>
  </div>
</template>

<script>
export default {
  methods: {
    fetch: function ({ store, params }) {
      const asd = 'fetch page'
      console.log('asd', asd)
      console.log('store', store)
      console.log('params', params)
    },
  },
}
</script>
