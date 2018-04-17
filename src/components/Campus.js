import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCampus, deleteCampus } from '../store';
import { PageHeader } from 'react-bootstrap';

import StudentSmall from './StudentSmall';

import style from '../styles/display.css';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.campus ? this.props.campus.name : '',
      description: this.props.campus ? this.props.campus.description : ''
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChangeName(ev) {
    this.setState({ name: ev.target.value });
  }
  onChangeDescription(ev) {
    this.setState({ description: ev.target.value });
  }

  onSave(ev) {
    ev.preventDefault();
    const campus = { id: this.props.id,
                     name: this.state.name,
                     description: this.state.description };

    this.props.saveCampus(campus);
  }
  onDelete() {
    this.props.deleteCampus({ id: this.props.id });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.campus ? nextProps.campus.name : '',
                    description: nextProps.campus ? nextProps.campus.description : '' });
  }

  render() {
    const { campus } = this.props;
    const { name, description } = this.state;
    const { onChangeName, onChangeDescription, onSave, onDelete } = this;
    if (!campus) {
      return <div>No campus found!</div>;
    }
    return (
      <div>
        <div className={ style.header }>
          <PageHeader>{ campus.name }</PageHeader>
        </div>
        <img className={ style.campusImage } src={ campus.imageUrl } />
        <div>
          <form onSubmit={ onSave }>
            <div className={ style.inner }>
              <input type="text" placeholder={ name } onChange={ onChangeName } />
            </div>
            <div className={ style.inner }>
              <textarea rows="5" cols="40" role="textbox" placeholder={ description } onChange={ onChangeDescription } />
              <div className={ style.updateButton }>
                <button className="btn btn-primary" disabled={ !this.state.name || !this.state.description }>Update Campus</button>
              </div>
            </div>
          </form>
          <div className={ style.inner }>
            <button className="btn btn-danger" onClick={ onDelete }>Delete Campus</button>
          </div>
        </div>
        <StudentSmall campus={ campus } />
      </div>
    );
  }
}

const mapStateToProps = ({ campuses }, { id }) => {
  const campus = campuses.find(item => item.id === id);
  return {
    campus
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveCampus: (campus) => dispatch(saveCampus(campus, history)),
    deleteCampus: (campus) => dispatch(deleteCampus(campus, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
