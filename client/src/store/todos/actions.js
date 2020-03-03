import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export default {
  /**
   * Get all Todo items
   */
  GET_ALL: async ({ commit }) => {
    const res = await api.get('/todos')

    commit('SET_TODOS', res.data)
  },

  /**
   * Add a new Todo item, and refresh the list
   */
  ADD_NEW: async ({ dispatch }, task) => {
    await api.post('/todos', {
      task
    })

    dispatch('GET_ALL')
  },

  /**
   * Toggle a Todo item's `complete` status, and refresh the list
   */
  TOGGLE_COMPLETE: async ({ dispatch }, { todo, completed }) => {
    await api.put(`/todos/${todo.id}`, {
      completed
    })

    dispatch('GET_ALL')
  },

  /**
   * Toggle a Todo item's `archived` status, and refresh the list
   */
  TOGGLE_ARCHIVE: async ({ dispatch }, todo) => {
    await api.put(`/todos/${todo.id}`, {
      archived: !todo.archived
    })

    dispatch('GET_ALL')
  },

  /**
   * Delete a Todo item, and refresh the list
   */
  DESTROY: async ({ dispatch }, todo) => {
    await api.delete(`/todos/${todo.id}`)

    dispatch('GET_ALL')
  }
}
