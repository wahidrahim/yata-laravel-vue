export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    current: ({ todos }) => todos.filter(todo => !todo.archived),
    archived: ({ todos }) => todos.filter(todo => todo.archived)
  },
  mutations: {},
  actions: {
    GET_TODOS: ({ state }) => {
      state.todos = [
        {
          task: 'some task',
          archived: false,
          completed: false,
          createdAt: '2020-01-01'
        },
        {
          task: 'some other task',
          archived: true,
          completed: true,
          createdAt: '2020-01-01'
        },
        {
          task: 'some other task',
          archived: true,
          completed: false,
          createdAt: '2020-01-01'
        },
        {
          task: 'yet another task',
          archived: false,
          completed: true,
          createdAt: '2020-01-01'
        }
      ]
    }
  }
}
