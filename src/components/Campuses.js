import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import style from '../styles/display.css';

const Campuses = ({ campuses }) => {
  if (campuses.length < 1) {
    return (
      <h1>We don't have any campuses!</h1>
    );
  }
  return (
    <div>
      <div className={ style.header }>
        <PageHeader>All Campuses: </PageHeader>
      </div>
      <div className={ style.inner }>
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
    </div>
  );
};

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  };
};

export default connect(mapStateToProps)(Campuses);
