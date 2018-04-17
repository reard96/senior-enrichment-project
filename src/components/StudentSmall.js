import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import { saveStudent } from '../store';

import style from '../styles/display.css';

class StudentSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: this.props.campus ? this.props.campus.id : 'Choose a Campus'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.campusId !== this.state.campusId) {
    this.setState({ campusId: nextProps.campusId ? nextProps.campusId : '' }); }
  }

  render() {
    const { students, campus } = this.props;
    const { campusId } = this.state;
    if (students.filter(student => student.campusId === campusId) < 1) {
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
            students.filter(student => student.campusId === campusId).map(student => {
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
}

const mapStateToProps = ({ students, campuses }) => {
  return {
    students,
    campuses
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveStudent: (student) => dispatch(saveStudent(student, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentSmall);
