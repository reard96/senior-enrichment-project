import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStudent } from '../store/index.js';
import { PageHeader } from 'react-bootstrap';

import style from '../styles/display.css';

class StudentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      gpa: '0.00 - 4.00'
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
        <div className={ style.header }>
          <PageHeader>Create a Student</PageHeader>
        </div>
        <form onSubmit={ onSave }>
          <div className={ style.inner }>
            <input type="text" placeholder={ firstName } onChange={ onChangeFirstName } />
            <input type="text" placeholder={ lastName } onChange={ onChangeLastName } />
            <input type="email" placeholder={ email } onChange={ onChangeEmail } />
            <input type="number" step="0.1" placeholder={ gpa } onChange={ onChangeGpa } />
            <div className={ style.updateButton }>
              <button className="btn btn-success" disabled={ !this.state.firstName || !this.state.lastName || !this.state.email || !this.state.gpa }>Create Student</button>
            </div>
          </div>
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
