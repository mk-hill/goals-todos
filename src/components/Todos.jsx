import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';

class Todos extends Component {
  addItem = e => {
    e.preventDefault();
    // Passing callback to reset input
    this.props.dispatch(handleAddTodo(this.input.value, () => (this.input.value = '')));
  };

  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = id => {
    this.props.dispatch(handleToggleTodo(id));
  };

  render() {
    return (
      <section>
        <h2>Todo List</h2>
        <input type="text" placeholder="Add Todo" ref={input => (this.input = input)} />
        <button onClick={this.addItem}>Add Todo</button>
        <List toggle={this.toggleItem} remove={this.removeItem} items={this.props.todos} />
      </section>
    );
  }
}

export default connect(state => ({ todos: state.todos }))(Todos);
