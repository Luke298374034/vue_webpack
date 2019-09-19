import Vue from 'vue'
import Vuex from 'vuex'
// import {state, mutations} from './mutations.js'
import * as getters from './getters.js'
// import * as actions from './actions.js'
import count from './modules/count'
import todo from './modules/todo'
import shop from './modules/shop'
import cart from './modules/cart'
import opendata from './modules/opendata'
import root from './modules/root'
// import {state, actions, mutations} from './root.js'
import { actions, mutations } from './root.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // state,
  state: {
    count: {
      count: 0
    },
    todo: {
      todo: []
    }
  },
  mutations,
  getters,
  actions,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    count,
    todo,
    shop,
    cart,
    opendata,
    root
  },

  // 嚴格模式，禁止直接修改 state
  strict: true
})
