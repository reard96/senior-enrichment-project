import axios from 'axios';

// ACTION TYPES
const SET_STUDENTS = 'SET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const CREATE_STUDENT  = 'CREATE_STUDENT';

// ACTION CREATORS
export const loadStudents = () => {
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

export const saveStudent = (student, history) => {
  if (student.id) {
    return (dispatch) => {
      return axios.put(`/api/students/${ student.id }`, student)
        .then(result => result.data)
        .then(student => dispatch({
          type: UPDATE_STUDENT,
          student
        })
      )
      .then(() => {
        history.push('/students');
      });
    };
  }
  return (dispatch) => {
    return axios.post('/api/students', student)
      .then(result => result.data)
      .then(student => dispatch({
        type: CREATE_STUDENT,
        student
      })
    )
    .then(() => {
      history.push('/students');
    });
  };
};

export const deleteStudent = (student, history) => {
  return (dispatch) => {
    return axios.delete(`/api/students/${ student.id }`)
      .then(() => dispatch({
        type: DELETE_STUDENT,
        student
      })
    )
    .then(() => {
      history.push('/students');
    });
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      state = action.students;
      break;
    case UPDATE_STUDENT:
      state = state.map(student => student.id === action.student.id ? action.student : student);
      break;
    case DELETE_STUDENT:
      state = state.filter(student => student.id !== action.student.id);
      break;
    case CREATE_STUDENT:
      state = [...state, action.student];
      break;
  }
  return state;
};

export default reducer;
