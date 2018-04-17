import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStudent, deleteStudent } from '../store';
import { PageHeader } from 'react-bootstrap';

import style from '../styles/display.css';
import CampusDropdown from './CampusDropdown';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.student ? this.props.student.firstName : '',
      lastName: this.props.student ? this.props.student.lastName : '',
      email: this.props.student ? this.props.student.email : '',
      gpa: this.props.student ? this.props.student.gpa : 0.00,
      campusId: this.props.student ? this.props.student.campusId : 'Choose a Campus'
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeCampusId = this.onChangeCampusId.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }
  onChangeCampusId(val) {
    this.setState({ campusId: val });
  }

  onSave(ev) {
    ev.preventDefault();
    const student = { id: this.props.id,
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      email: this.state.email,
                      gpa: this.state.gpa,
                      campusId: this.state.campusId };
    this.props.saveStudent(student);
  }
  onDelete() {
    this.props.deleteStudent({ id: this.props.id });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ firstName: nextProps.student ? nextProps.student.firstName : '',
                    lastName: nextProps.student ? nextProps.student.lastName : '',
                    email: nextProps.student ? nextProps.student.email : '',
                    gpa: nextProps.student ? nextProps.student.gpa : '',
                    campusId: nextProps.student ? nextProps.student.campusId : '' });
  }

  render() {
    const { student } = this.props;
    const { firstName, lastName, email, gpa } = this.state;
    const { onChange, onChangeCampusId, onSave, onDelete } = this;
    if (!student) {
      return <div>No student found!</div>;
    }
    return (
      <div>
        <div className={ style.header }>
          <PageHeader>{ student.name }</PageHeader>
        </div>
        <img className={ style.studentImage } src={ student.image } />
        <form onSubmit={ onSave }>
          <div className={ style.inner }>
            <input type="text" placeholder={ firstName } name="firstName" onChange={ onChange } />
            <input type="text" placeholder={ lastName } name="lastName" onChange={ onChange } />
            <input type="email" placeholder={ email } name="email" onChange={ onChange } />
            <input type="number" step="0.1" placeholder={ gpa } name="gpa" onChange={ onChange } />
            <CampusDropdown student={ student } onChangeCampusId={ onChangeCampusId } />
            <div className={ style.updateButton }>
              <button className="btn btn-primary" disabled={ !this.state.firstName || !this.state.lastName || !this.state.email || !this.state.gpa }>Update Student</button>
            </div>
          </div>
        </form>
        <div className={ style.inner }>
          <button className="btn btn-danger" onClick={ onDelete }>Delete Student</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ students }, { id }) => {
  const student = students.find(item => item.id === id);
  return {
    student
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveStudent: (student) => dispatch(saveStudent(student, history)),
    deleteStudent: (student) => dispatch(deleteStudent(student, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
