import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

class Goals extends Component {
  addItem = e => {
    e.preventDefault();
    this.props.dispatch(handleAddGoal(this.input.value, () => (this.input.value = '')));
  };

  removeItem = goal => {
    this.props.dispatch(handleDeleteGoal(goal));
  };

  render() {
    return (
      <section>
        <h2>Goal List</h2>
        <input type="text" placeholder="Add Goal" ref={input => (this.input = input)} />
        <button onClick={this.addItem}>Add Goal</button>
        <List remove={this.removeItem} items={this.props.goals} />
      </section>
    );
  }
}

export default connect(state => ({ goals: state.goals }))(Goals);