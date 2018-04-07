import React, { Component } from 'react';
import Nav from './Nav';
import { loadStudents } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <Nav />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStudents: () => dispatch(loadStudents())
  };
};

export default connect(null, mapDispatchToProps)(App);
