export const selectTodos = ({ todos, selectedStatus, selectedSortOption }) => {
  if (selectedStatus === 'all') {
    return sortTodos(todos, selectedSortOption);
  }

  const filteredTodos = todos.filter((todo) => todo.status === selectedStatus);

  return sortTodos(filteredTodos, selectedSortOption);
}

function sortTodos(todos, sortOption) {
  return [...todos].sort((todo1, todo2) => {
    return todo2[sortOption] - todo1[sortOption];
  });
}
