import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
// const SET_CAMPUSES = 'SET_CAMPUSES';

const studentsReducer = (state = [], action) => {
  switch(action.type) {
    case SET_STUDENTS:
      state = action.students;
      break;
  }
  return state;
};

const campusReducer = (state = [], action) => {
  return state;
};

const loadStudents = () => {
  return (dispatch) => {
    return axios.get('/api/students')
      .then(result => result.data)
      .then(students => dispatch({
        type: SET_STUDENTS,
        students
      })
    );
  };
};

// const loadCampuses = () => {
//   return (dispatch) => {
//     return axios.get('/api/campuses')
//       .then(result => result.data)
//       .then(campuses => dispatch({
//         type: SET_CAMPUSES,
//         campuses
//       })
//     );
//   };
// };

const reducer = combineReducers({
  students: studentsReducer,
  campuses: campusReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export { loadStudents };
