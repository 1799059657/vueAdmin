import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userValue: '',
    QQUserValue: ''
  },
  mutations: {
    setUserValue(state, newValue) {
      state.userValue = newValue
    },
    setQQUserValue(state, newValue) {
      console.log(newValue)
      state.QQUserValue = newValue
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
