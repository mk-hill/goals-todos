import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLoadData } from '../actions/shared';
import Todos from './Todos';
import Goals from './Goals';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadData(this));
  }

  render() {
    const { loading } = this.props;

    if (loading) return <h3>Loading fake api data</h3>;

    return (
      <div className="app">
        <Todos />
        <Goals />
      </div>
    );
  }
}

export default connect(state => ({ loading: state.loading }))(App);
