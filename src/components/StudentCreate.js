import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStudent } from '../store/index.js';

class StudentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'first name',
      lastName: 'last name',
      email: 'email address',
      gpa: 0
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeGpa = this.onChangeGpa.bind(this);
    this.onSave = this.onSave.bind(this);
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

  render() {
    const { firstName, lastName, email, gpa } = this.state;
    const { onChangeFirstName, onChangeLastName, onChangeEmail, onChangeGpa, onSave } = this;

    return (
      <div>
        <h1>Create a Student</h1>
        <form onSubmit={ onSave }>
          <input type="text" value={ firstName } onChange={ onChangeFirstName } />
          <input type="text" value={ lastName } onChange={ onChangeLastName } />
          <input type="email" value={ email } onChange={ onChangeEmail } />
          <input type="number" value={ gpa } onChange={ onChangeGpa } />
          <button className="btn btn-success" disabled={ !this.state.firstName || !this.state.lastName || !this.state.email || !this.state.gpa }>Create Student</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveStudent: (student) => dispatch(saveStudent(student, history))
  };
};

export default connect(null, mapDispatchToProps)(StudentCreate);
