export const state = () => ({
  counter: 0,
  loadedPosts: '',
})

export const mutations = {
  setPosts(state, posts) {
    console.log('state', state)
    console.log('posts', posts)
    state.loadedPosts = posts
  },
  increment(state) {
    console.log('state', state)

    state.counter++
  },
}

export const actions = {
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
}
