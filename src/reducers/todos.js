import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';
import { RECEIVE_DATA } from '../actions/shared';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // Using concat instead of push to not mutate original state
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      // New state to be returns includes all other todos as they were
      // and todo with matching id has its complete bool inverted
      // Using Object.assign so as to not hard code other properties, just flip complete
      return state.map(todo => (todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete })));
    case RECEIVE_DATA:
      // New state comes in as array on action.todos
      return action.todos;
    default:
      return state;
  }
}
