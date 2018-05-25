import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    dCount: state => {
      return state.count * 2
    }
  },
  actions: {
    increment: function (context) {
      context.commit('increment')
    }
  }
})

export default store
