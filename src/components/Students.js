import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import style from '../styles/display.css';

const Students = ({ students }) => {
  if (students.length < 1) {
    return (
      <h1>We don't have any students!</h1>
    );
  }
  return (
    <div>
      <div className={ style.header }>
        <PageHeader>All Students:</PageHeader>
      </div>
      <div classname={ style.inner } >
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
    </div>
  );
};

const mapStateToProps = ({ students }) => {
  return {
    students
  };
};

export default connect(mapStateToProps)(Students);
