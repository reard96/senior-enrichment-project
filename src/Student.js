import React from 'react';
import { connect } from 'react-redux';

const Student = ({ student }) => {
  if (!student) {
    return null;
  }
  return (
    <h1>{ student.name }</h1>
  );
};

const mapStateToProps = ({ students }, { id }) => {
  const student = students.find(item => item.id === id);
  return {
    student
  };
};

export default connect(mapStateToProps)(Student);
