import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const handleAddTodo = (todoName, callback) => dispatch => API.saveTodo(todoName)
  .then((todo) => {
    callback();
    dispatch(addTodo(todo));
  })
  .catch(() => alert(`Api add todo mock error caught succesfully, ${todoName} not added to store.`));

export const handleDeleteTodo = todo => (dispatch) => {
  dispatch(removeTodo(todo.id));
  return API.deleteTodo(todo.id).catch(() => {
    dispatch(addTodo(todo));
    alert('Api removal mock error caught succesfully, todo item added back to store.');
  });
};

export const handleToggleTodo = id => (dispatch) => {
  dispatch(toggleTodo(id));
  return API.saveTodoToggle(id).catch(() => {
    dispatch(toggleTodo(id));
    alert('Api toggle mock error caught succesfully, toggle state reverted.');
  });
};
