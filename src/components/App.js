import React, { Component } from 'react';
import Nav from './Nav';
import { loadStudents, loadCampuses } from '../store/store.js';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Campuses from './Campuses';
import Student from './Student';
import Campus from './Campus';
import StudentCreate from './StudentCreate';
import CampusCreate from './CampusCreate';

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
          <Switch>
            <Route path="/students/create" exact render={({ history }) => <StudentCreate history={ history } />} />
            <Route path="/students/:id" exact render={ ({ match, history }) => <Student id={ match.params.id * 1 } history={ history } /> } />
          </Switch>
          <Route path="/campuses" exact component={ Campuses } />
          <Switch>
          <Route path="/campuses/create" exact render={({ history }) => <CampusCreate history={ history } />} />
            <Route path="/campuses/:id" exact render={ ({ match, history }) => <Campus id={ match.params.id * 1 } history={ history } /> } />
          </Switch>
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
