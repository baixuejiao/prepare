import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    num: 3
  },
  mutations: {
    add(state, num) {
      state.count += num
    }

  },
  getters: {
    sum(state) {
      return state.count * state.num
    }
  },
  actions: {
    addFun({commit}, num) {
      setTimeout(() => {
        commit('add', num)
      }, 1000)
    }
  },
  modules: {
  }
})
