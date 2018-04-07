import React from 'react';
import { connect } from 'react-redux';

const Campus = ({ campus }) => {
  if (!campus) {
    return null;
  }
  return (
    <h1>{ campus.name }</h1>
  );
};

const mapStateToProps = ({ campuses }, { id }) => {
  const campus = campuses.find(item => item.id === id);
  return {
    campus
  };
};

export default connect(mapStateToProps)(Campus);
