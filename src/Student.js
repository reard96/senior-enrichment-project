import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStudent, deleteStudent } from './store';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.student ? this.props.student.firstName : '',
      lastName: this.props.student ? this.props.student.lastName : '',
      email: this.props.student ? this.props.student.email : '',
      gpa: this.props.student ? this.props.student.gpa : 0.00,
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGpa = this.onChangeGpa.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChangeFirstName(ev) {
    this.setState({ firstName: ev.target.value });
  }

  onChangeLastName(ev) {
    this.setState({ lastName: ev.target.value });
  }

  onChangeEmail(ev) {
    this.setState({ email: ev.target.value });
  }

  onChangeGpa(ev) {
    this.setState({ gpa: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    const student = { id: this.props.id,
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      email: this.state.email,
                      gpa: this.state.gpa };

    this.props.saveStudent(student);
  }

  onDelete() {
    this.props.deleteStudent({ id: this.props.id });
  }

  render() {
    const { student } = this.props;
    const { firstName, lastName, email, gpa }  = this.state;
    const { onChangeFirstName, onChangeLastName, onChangeEmail, onChangeGpa, onSave, onDelete } = this;

    if (!student) {
      return <div>No student found!</div>;
    }
    return (
      <div>
        <h1>{ student.name }</h1>
        <form onSubmit={ onSave }>
          <input type="text" value={ firstName } onChange={ onChangeFirstName } />
          <input type="text" value={ lastName } onChange={ onChangeLastName } />
          <input type="email" value={ email } onChange={ onChangeEmail } />
          <input type="number" value={ gpa } onChange={ onChangeGpa } />
          <button className="btn btn-primary">Update Student</button>
        </form>
        <button className="btn btn-danger" onClick={ onDelete }>Delete</button>
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
