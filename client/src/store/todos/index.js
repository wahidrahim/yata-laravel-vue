import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

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
      const res = await api.get('/todos')

      commit('SET_TODOS', res.data)
    },
    ADD_TODO: async ({ dispatch }, task) => {
      await api.post('/todos', {
        task
      })

      dispatch('GET_TODOS')
    },
    UPDATE_TODO: async ({ commit, dispatch }, { id, completed }) => {
      await api.put(`/todos/${id}`, {
        completed
      })

      dispatch('GET_TODOS')
    }
  }
}
