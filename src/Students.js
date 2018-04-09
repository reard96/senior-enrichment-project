import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Students = ({ students }) => {
  if (students.length < 1) {
    return (
      <h1>We don't have any students!</h1>
    );
  }
  return (
    <div>
      <h1>All Students:</h1>
      <ul>
      {
        students.map(student => {
          return (
            <li key={ student.id }>
              <Link to={ `/students/${ student.id }` }>{ student.name }</Link>
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
