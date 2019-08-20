export const getCount = state => { return state.count }

export const getTodos = state => state.todos.filter(item => !item.done)

export const getDoneTodos = state => state.todos.filter(item => item.done)
