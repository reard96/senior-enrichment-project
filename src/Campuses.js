import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Campuses = ({ campuses }) => {
  return (
    <div>
      <h1>All Campuses:</h1>
      <ul>
      {
        campuses.map(campus => {
          return (
            <li key={ campus.id }>
              <Link to={ `/campuses/${ campus.id }` }>{ campus.name }</Link>
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
