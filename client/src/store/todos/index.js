export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    current: ({ todos }) => todos.filter(todo => !todo.archived),
    archived: ({ todos }) => todos.filter(todo => todo.archived)
  },
  mutations: {
    SET_TODOS: (state, todos) => (state.todos = todos),
    SET_TASK_COMPLETION: (state, { id, completed }) => {
      const todo = state.todos.find(todo => todo.id === id)

      todo.completed = completed
    },
    ADD_TODO: (state, todo) => state.todos.push(todo)
  },
  actions: {
    GET_TODOS: ({ commit }) => {
      commit('SET_TODOS', [
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
      ])
    },
    ADD_TODO: ({ commit, state }, task) => {
      commit('ADD_TODO', {
        id: state.todos.length + 1,
        task,
        archived: false,
        completed: false,
        createdAt: new Date()
      })
    },
    UPDATE_TODO: ({ commit }, { id, completed }) => {
      commit('SET_TASK_COMPLETION', { id, completed })
    }
  }
}
