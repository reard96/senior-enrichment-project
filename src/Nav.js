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
        <Link to="/api/students">Students: { students.length }</Link>
      </li>
      <li>
      <Link to="/api/campuses">Campuses: { campuses.length }</Link>
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
