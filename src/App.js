import React, { Component } from 'react';
import Nav from './Nav';
import { loadStudents, loadCampuses } from './store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Campuses from './Campuses';

class App extends Component {
  componentDidMount() {
    this.props.loadStudents();
    this.props.loadCampuses();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={ Home } />
          <Route path="/api/students" exact component={ Students } />
          <Route path="/api/campuses" exact component={ Campuses } />
        </div>
      </Router>
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
