import React, { Component } from 'react';
import Nav from './Nav';
import { loadStudents, loadCampuses } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadStudents();
    this.props.loadCampuses();
  }

  render() {
    return (
      <Nav />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStudents: () => dispatch(loadStudents()),
    loadCampuses: () => dispatch(loadCampuses())
  };
};

export default connect(null, mapDispatchToProps)(App);
