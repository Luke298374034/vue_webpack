import * as types from '../mutations_type.js'

export const state = {
  loading: false
}

export const getters = {
  getLoading: state => state.loading
}

export const actions = {
  toggleLoading ({ commit }, isLoading) {
    commit(types.LOADING, isLoading)
  }
}

export const mutations = {
  [types.LOADING] (state, isLoading) {
    state.loading = isLoading
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
