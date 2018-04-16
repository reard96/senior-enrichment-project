import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCampus } from '../store';
import { PageHeader } from 'react-bootstrap';

import style from '../styles/display.css';

class CampusCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Campus name',
      description: 'Lorem ipsum'
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSave = this.onSave.bind(this);
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

  render() {
    const { name, description } = this.state;
    const { onChangeName, onChangeDescription, onSave } = this;

    return (
      <div>
        <div className={ style.header }>
          <PageHeader>Create a Campus</PageHeader>
        </div>
        <form onSubmit={ onSave }>
          <div className={ style.inner }>
            <input type="text" placeholder={ name } onChange={ onChangeName } />
          </div>
          <div className={ style.inner }>
            <textarea rows="5" cols="40" role="textbox" placeholder={ description } onChange={ onChangeDescription } />
            <div className={ style.updateButton }>
              <button className="btn btn-success" disabled={ !this.state.name || !this.state.description }>Create Campus</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveCampus: (campus) => dispatch(saveCampus(campus, history))
  };
};

export default connect(null, mapDispatchToProps)(CampusCreate);
