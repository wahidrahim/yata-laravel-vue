import TodosActions from './actions/todos-actions'

export default {
  state: {
    todos: []
  },
  getters: {},
  mutations: {},
  actions: {
    [TodosActions.GET_TODOS]: context => {
      console.log(context)
    }
  }
}
