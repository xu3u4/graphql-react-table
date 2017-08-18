import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import api from 'middleware/api';

import reducers from './reducers';
import TableFrame from './components/table_frame';

const stores = createStore(reducers, applyMiddleware(ReduxThunk, api));
ReactDOM.render(
  <Provider store={stores}>
    <TableFrame />
  </Provider>,
  document.getElementById('app')
);
