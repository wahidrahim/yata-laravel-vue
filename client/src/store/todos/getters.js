export default {
  current: ({ todos }) => todos.filter(todo => !todo.archived),
  archived: ({ todos }) => todos.filter(todo => todo.archived)
}
