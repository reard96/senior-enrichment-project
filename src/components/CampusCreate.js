import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCampus } from '../store/store.js';

class CampusCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'campus name',
      description: 'lorem ipsum'
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
        <h1>Create a Campus</h1>
        <form onSubmit={ onSave }>
          <input type="text" value={ name } onChange={ onChangeName } />
          <input type="text" value={ description } onChange={ onChangeDescription } />
          <button className="btn btn-success" disabled={ !this.state.name || !this.state.description }>Create Campus</button>
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
