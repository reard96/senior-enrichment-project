import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import style from '../styles/nav.css';

const Nav = ({ students, campuses }) => {
  return (
    <ul>
      <li>
        <NavLink className={ style.linkActive } to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/students">Students: { students.length }</NavLink>
      </li>
      <li>
        <NavLink to="/campuses">Campuses: { campuses.length }</NavLink>
      </li>
      <li>
        <NavLink to="/students/create">Create a Student</NavLink>
      </li>
      <li>
        <NavLink to="/campuses/create">Create a Campus</NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ students, campuses }) => {
  return {
    students,
    campuses
  };
};

export default withRouter(connect(mapStateToProps)(Nav));
