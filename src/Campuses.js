import React from 'react';
import { connect } from 'react-redux';

const Campuses = ({ campuses }) => {
  return (
    <div>
      <h1>All Campuses:</h1>
      <ul>
      {
        campuses.map(campus => {
          return (
            <li key={ campus.id }>
              { campus.name }
            </li>
          );
        })
      }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  };
};

export default connect(mapStateToProps)(Campuses);
