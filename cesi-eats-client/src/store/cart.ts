import Vue from 'vue'

const cart = window.localStorage.getItem('cart')
const state = {
  cart: cart ? JSON.parse(cart) : []
}

const mutations = {
  addToCart (state, item) {
    const mp = state.cart.find(mp => mp.id === item.id && mp.name === item.name)
    if (mp) {
      mp.quantity++
      mp.totalPrice += mp.price
    } else {
      state.cart.push(item)
      Vue.set(item, 'quantity', 1)
      Vue.set(item, 'totalPrice', item.price)
    }
    this.commit('saveCart')
  },
  removeFromCart (state, item) {
    const mp = state.cart.find(mp => mp.id === item.id && mp.name === item.name)
    if (mp) {
      mp.quantity--
      mp.totalPrice -= mp.price
      if (mp.quantity < 1) {
        state.cart.splice(state.cart.indexOf(item), 1)
      }
    }
    this.commit('saveCart')
  },
  removeAllQuantityFromCart (state, item) {
    const mp = state.cart.find(mp => mp.id === item.id && mp.name === item.name)
    if (mp) {
      state.cart.splice(state.cart.indexOf(item), 1)
    }
    this.commit('saveCart')
  },
  removeAllFromCart (state, item) {
    const mps = state.cart.filter(mp => mp.restaurantId === item.id)
    for (const mp in mps) {
      state.cart.splice(state.cart.indexOf(mp), 1)
    }
    this.commit('saveCart')
  },
  saveCart (state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}

const actions = {
  //
}

const getters = {
  //
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}
export default cartModule
