export const state = () => ({
  counter: 0,
})

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  increment(state) {
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
