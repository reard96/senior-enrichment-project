import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ students, campuses }) => {
  return (
    <ul>
      <li>
        Home
      </li>
      <li>
        Students: { students.length }
      </li>
      <li>
        Campuses: { campuses.length }
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
