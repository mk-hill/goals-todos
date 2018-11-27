import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

const receiveDataAction = (todos, goals) => ({
  type: RECEIVE_DATA,
  todos,
  goals,
});

export const handleLoadData = () => (dispatch) => {
  Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
    dispatch(receiveDataAction(todos, goals));
  });
};
