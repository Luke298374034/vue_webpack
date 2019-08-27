export const getCountandTodo = state => {
  return {
    count: state.count.count,
    todo: state.todo.todos
  }
}

export const getAllstate = state => state
