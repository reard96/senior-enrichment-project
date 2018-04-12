import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ students, campuses }) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/students">Students: { students.length }</Link>
      </li>
      <li>
        <Link to="/campuses">Campuses: { campuses.length }</Link>
      </li>
      <li>
        <Link to="/students/create">Create a Student</Link>
      </li>
      <li>
        <Link to="/campuses/create">Create a Campus</Link>
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

export default connect(mapStateToProps)(Nav);
