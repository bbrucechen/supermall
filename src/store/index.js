import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  cartList:[]
}

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store