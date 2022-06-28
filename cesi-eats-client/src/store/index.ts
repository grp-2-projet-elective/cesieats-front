import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    defineUser (state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
    cart
  }
})
