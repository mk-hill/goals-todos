import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

const addGoal = goal => ({
  type: ADD_GOAL,
  goal,
});

const removeGoal = id => ({
  type: REMOVE_GOAL,
  id,
});

export const handleAddGoal = (goalName, callback) => dispatch => API.saveGoal(goalName)
  .then((goal) => {
    callback();
    dispatch(addGoal(goal));
  })
  .catch(() => alert(`Api add goal mock error caught succesfully, ${goalName} not added to store.`));

export const handleDeleteGoal = goal => (dispatch) => {
  dispatch(removeGoal(goal.id));
  return API.deleteGoal(goal.id).catch(() => {
    dispatch(addGoal(goal));
    alert('Api removal mock error caught succesfully, goal item added back to store.');
  });
};
