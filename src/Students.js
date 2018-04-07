import React from 'react';
import { connect } from 'react-redux';

const Students = ({ students }) => {
  return (
    <div>
      <h1>All Students:</h1>
      <ul>
      {
        students.map(student => {
          return (
            <li key={ student.id }>
              { student.name }
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
