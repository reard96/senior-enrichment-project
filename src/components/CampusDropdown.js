import React, { Component } from 'react';
import { connect } from 'react-redux';

class CampusDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campusId: this.props.student ? this.props.student.campusId : 'Choose a campus'
    };
  this.campusChange = this.campusChange.bind(this);
  }

  campusChange() {
    const grabCampuses = document.getElementById('allCampuses');
    const newCampus = grabCampuses.options[grabCampuses.selectedIndex].value;
    this.props.onChangeCampusId(newCampus);
    // Couldn't figure out update without refresh...
    this.setState({ campusId: newCampus });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ campusId: nextProps.student ? nextProps.student.campusId : '' });
  }

  render() {
    const { campuses } = this.props;
    const { campusId } = this.state;
    const { campusChange } = this;
    return (
      <select id="allCampuses" onChange={ campusChange }>
      {
        campuses.filter(campus => campusId !== campus.id).map(campus => {
          return (
            <option value={ campus.id } key={ campus.id }>{ campus.name }</option>
          );
        })
      }
      </select>
    );
  }
}

const mapStateToProps = ({ campuses }) => {
  return {
    campuses
  };
};

export default connect(mapStateToProps)(CampusDropdown);
