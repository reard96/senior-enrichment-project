import React, { Component } from 'react';
import Nav from './Nav';
import { loadStudents, loadCampuses } from './store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Campuses from './Campuses';
import Student from './Student';
import Campus from './Campus';

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
          <Route path="/students" exact component={ Students } />
          <Route path="/students/:id" exact render={ ({ match, history }) => <Student id={ match.params.id * 1 } history={ history } /> } />
          <Route path="/campuses" exact component={ Campuses } />
          <Route path="/campuses/:id" exact render={ ({ match, history }) => <Campus id={ match.params.id * 1 } history={ history } /> } />
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
