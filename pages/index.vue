<template>
  <Tutorial />
</template>

<script>
export default {
  created() {
    console.log('nuxt1', process.BASE_URL)
    console.log('nuxt2', process.env.VUE_APP_BASE_DOMAIN)
    console.log('nuxt3', process.env.baseUrl)
  },
}
</script>
