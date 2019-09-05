import shop from './shop'

const types = {
  CANCEL_CART: 'store/CANCEL_CART'
}

const state = shop.state

const getters = {
  getRecommendedProducts: state => {
    // 先取得庫存餐點表
    const inventoryList = state.products.filter(p => p.inventory > 0)
    // 取隨機數
    const random = Math.round(Math.random() * (inventoryList.length - 1))
    if (inventoryList.length === 0) return {}
    // 回傳隨機數的餐點
    return inventoryList[ random ]
  }
}

const actions = {
  cancelCart ({ commit }, id) {
    commit(types.CANCEL_CART, id)
  }
}

const mutations = {
  [types.CANCEL_CART] (state, title) {
    // 從購物車移除
    // ES6 array findIndex 找到條件成立的物件，所在陣列中的位子。
    const cartIndex = state.shoppingCart.findIndex(item => item.title === title)
    state.shoppingCart.splice(cartIndex, 1)
    // 餐點庫存 +1
    const product = state.products.find(item => item.title === title)
    product.inventory += 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
