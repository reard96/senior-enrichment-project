import React from 'react';
import { render } from 'react-dom';
import store, { loadStudents } from './store';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(loadStudents());

const root = document.getElementById('root');
render(<hr />, root);
