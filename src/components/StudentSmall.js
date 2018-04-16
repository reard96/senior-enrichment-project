import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import style from '../styles/display.css';

// need to make this a component that updates w/ state!
const StudentSmall = ({ students, campus }) => {
  if (students.filter(student => student.campusId === campus.id) < 1) {
    return (
      <div className={ style.inner }>
        <PageHeader>
          <small>We don't have any students for { campus.name }!</small>
        </PageHeader>
      </div>
    );
  }
  return (
    <div>
      <div className={ style.header }>
        <PageHeader>
          <small>All Students for { campus.name }:</small>
        </PageHeader>
      </div>
      <div className={ style.inner}>
        <ul className={ style.studentList }>
        {/* Doesn't look the best on a small screen, but I need to move on */}
        {
          students.filter(student => student.campusId === campus.id).map(student => {
            return (
              <li key={ student.id } className={ style.studentBox }>
                <img className={ style.studentImage } src={ student.image } />
                <Link to={ `/students/${ student.id }` }>{ student.name }</Link>
              </li>
            );
          })
        }
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = ({ students }) => {
  return {
    students
  };
};

export default connect(mapStateToProps)(StudentSmall);
