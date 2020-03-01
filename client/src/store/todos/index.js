import axios from 'axios'

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
    GET_TODOS: async ({ commit }) => {
      const res = await axios.get('http://localhost:3000/api/todos')

      console.log(res)
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
