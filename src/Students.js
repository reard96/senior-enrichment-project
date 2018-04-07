import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Students = ({ students }) => {
  return (
    <div>
      <h1>All Students:</h1>
      <ul>
      {
        students.map(student => {
          return (
            <li key={ student.id }>
              <Link to={ `/api/students/${ student.id }` }>{ student.name }</Link>
            </li>
          );
        })
      }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ students }) => {
  return {
    students
  };
};

export default connect(mapStateToProps)(Students);
