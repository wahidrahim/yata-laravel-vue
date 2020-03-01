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
          id: 1,
          task: 'some task',
          archived: false,
          completed: false,
          createdAt: '2020-01-01'
        },
        {
          id: 2,
          task: 'some other task',
          archived: true,
          completed: true,
          createdAt: '2020-01-01'
        },
        {
          id: 3,
          task: 'some other archived task',
          archived: true,
          completed: false,
          createdAt: '2020-01-01'
        },
        {
          id: 4,
          task: 'yet another task',
          archived: false,
          completed: true,
          createdAt: '2020-01-01'
        }
      ]
    }
  }
}
