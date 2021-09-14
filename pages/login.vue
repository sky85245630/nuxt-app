<template>
  <section class="container">
    <div>
      <h1 class="title">登入</h1>
      <nuxt-link to="/product"><button>商品頁面</button></nuxt-link>
      <button
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        Button
      </button>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: '登入',
    meta: [
      { hid: 'og:title', property: 'og:title', content: '123' },
      { hid: 'og:description', property: 'og:description', content: '321' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'o12412313123 QQ',
      },
    ],
  },
}
</script>
