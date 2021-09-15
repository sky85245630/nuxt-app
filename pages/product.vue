<template>
  <section class="container">
    <div>
      <h1 class="title">商品名稱</h1>
      <p class="description">這是商品敘述，絕對激安，錯過可惜</p>
      <div class="links">
        <a href="#" target="_blank" class="button--green">加入購物車</a>
        <a href="#" target="_blank" class="button--grey">立刻購買</a>
        <nuxt-link to="/login"><button>登入頁</button></nuxt-link>
        {{ result }}
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  loading: false,
  head: {
    title: '商品',
  },
  data() {
    return { result: '未查詢' }
  },

  // asyncData() {
  //   return { result1: '報名結果是 ooxx' }
  // },
  async asyncData() {
    let { data } = await axios.post('https://www.thef2e.com/api/isSignUp', {
      email: 'hexscholl@test.com',
    })

    return { result: data }
  },
}
</script>
