
import axios from 'axios';

// ACTION TYPES
const SET_CAMPUSES = 'SET_CAMPUSES';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const CREATE_CAMPUS  = 'CREATE_CAMPUS';

// ACTION CREATORS
export const loadCampuses = () => {
  return (dispatch) => {
    return axios.get('/api/campuses')
      .then(result => result.data)
      .then(campuses => dispatch({
        type: SET_CAMPUSES,
        campuses
      })
    );
  };
};

export const saveCampus = (campus, history) => {
  if (campus.id) {
    return (dispatch) => {
      return axios.put(`/api/campuses/${ campus.id }`, campus)
        .then(result => result.data)
        .then(campus => dispatch({
          type: UPDATE_CAMPUS,
          campus
        })
      )
      .then(() => {
        history.push('/campuses');
      });
    };
  }
  return (dispatch) => {
    return axios.post('/api/campuses', campus)
      .then(result => result.data)
      .then(campus => dispatch({
        type: CREATE_CAMPUS,
        campus
      })
    )
    .then(() => {
      history.push('/campuses');
    });
  };
};

export const deleteCampus = (campus, history) => {
  return (dispatch) => {
    return axios.delete(`/api/campuses/${ campus.id }`)
      .then(() => dispatch({
        type: DELETE_CAMPUS,
        campus
      })
    )
    .then(() => {
      history.push('/campuses');
    });
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      state = action.campuses;
      break;
    case UPDATE_CAMPUS:
      state = state.map(campus => campus.id === action.campus.id ? action.campus : campus);
      break;
    case DELETE_CAMPUS:
      state = state.filter(campus => campus.id !== action.campus.id);
      break;
    case CREATE_CAMPUS:
      state = [...state, action.campus];
      break;
  }
  return state;
};

export default reducer;
