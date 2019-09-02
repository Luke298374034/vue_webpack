const types = {
  ADD_TODO: 'todo/ADD_TODO',
  TOGGLE_TODO: 'todo/TOGGLE_TODO',
  DELETE_TODO: 'todo/DELETE_TODO',
  UPDATE_TODO: 'todo/UPDATE_TODO'
}
const state = {
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
    { key: 1, content: 'vuex 2.0', done: false },
    { key: 2, content: 'vue-router 2.0', done: false },
    { key: 3, content: 'vue-resource 2.0', done: false },
    { key: 4, content: 'webpack', done: false }
  ]
}

const getters = {
  getTodo: state => state.todos.filter(item => !item.done),
  getDoneTodo: state => state.todos.filter(item => item.done)
}

const actions = {
  addTodo: ({ commit }, newTodo) => {
    console.log('addTodo', newTodo)
    commit(types.ADD_TODO, newTodo)
  },
  toggleTodo: ({ commit }, key) => {
    console.log('toggleTodo', key)
    commit(types.TOGGLE_TODO, key)
  },
  deleteTodo: ({ commit }, key) => {
    console.log('deleteTodo', key)
    commit(types.DELETE_TODO, key)
  },
  updateTodo: ({ commit }, obj) => {
    console.log('updateTodo', obj)
    commit(types.UPDATE_TODO, obj)
  }
}
// 這邊簡單做一個 todo 的流水 key
// 預設值是 todos 的長度
let todoKey = state.todos.length

const mutations = {
  [types.ADD_TODO] (state, newTodo) {
    // todos 是一個 Array 所以 push 一個同結構的 Object
    state.todos.push({
      key: todoKey, // 流水 key
      content: newTodo, // 新 todo 的內容
      done: false // 預設當然是未做完
    })

    // 流水 key +1
    todoKey++
  },
  // 改變狀態
  [types.TOGGLE_TODO] (state, obj) {
    // console.log(obj)
    for (var i in state.todos) {
      var item = state.todos[i]
      if (item.key === obj.key) {
        // item.done = !item.done
        // console.log('TOGGLE_TODO:', item.content, 'done?', item.done)
        item.done = obj.checked // 直接使用 chenkbox $emit 的 value
        console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done)
        break
      }
    }
  },
  // 刪除
  [types.DELETE_TODO] (state, key) {
    for (var i in state.todos) {
      var item = state.todos[i]
      if (item.key === key) {
        console.log('DELETE_TODO:', item.content, ', index?', i)
        state.todos.splice(i, 1)
        break
      }
    }
  },

  // [types.DELELTE_TODO] (state, key) {
  //   var index = state.todos.findIndex(item => item.key === key)
  //   state.todos.splice(index, 1)
  //   console.log(`TODOS DELETED. key: ${key}, index: ${index}`)
  // },
  // [types.TOGGLE_TODO] (state, key) {
  //   var item = state.todos.find(item => item.key === key)
  //   item.done = !item.done
  //   console.log('TOGGLE_TODO: ', item.content, 'done?', item.done)
  // }

  // 更新
  [types.UPDATE_TODO] (state, obj) {
    for (var i in state.todos) {
      var item = state.todos[i]
      if (item.key === obj.key) {
        console.log('UPDATE_TODO:', item.content, ' to →', obj.change)
        // 找到 todo 更新 content
        state.todos[ i ].content = obj.change
        break
      }
    }
  }
}

export default{
  state,
  getters,
  actions,
  mutations
}
