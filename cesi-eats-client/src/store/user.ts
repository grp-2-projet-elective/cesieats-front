const user = window.localStorage.getItem('user')

const state = {
  user: user ? JSON.parse(user) : []
}

const mutations = {
  defineUser (state, user) {
    state.user = user
    this.commit('saveUser')
  },
  saveUser (state) {
    window.localStorage.setItem('user', JSON.stringify(state.user))
  }
}

const actions = {
  //
}

const getters = {
  //
}

const userModule = {
  state,
  mutations,
  actions,
  getters
}
export default userModule
