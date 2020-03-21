import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoList: []
  },
  mutations: {
    setPhotoList(state, data) {
      state.photoList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
