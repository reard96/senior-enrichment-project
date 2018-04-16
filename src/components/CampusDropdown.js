import React from 'react';
import { connect } from 'react-redux';

const CampusDropdown = ({ student, campuses }) => {
  return (
    <select>
    {
      campuses.filter(campus => student.campusId !== campus.id).map(campus => {
        return (
          <option key={ campus.id }>{ campus.id }</option>
        );
      })
    }
    </select>
  );
};

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  };
}

export default connect(mapStateToProps)(CampusDropdown);
