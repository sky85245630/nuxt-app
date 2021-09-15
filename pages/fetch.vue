<template>
  　　<button @click="$store.commit('increment')">
    {{ $store.state.counter }}
  </button>
</template>

<script>
export default {
  fetch({ store, params }) {
    const asd = 'fetch page'
    store.commit('setResult', asd)
    console.log('store', store)
    console.log('params', params)
  },
}
</script>
