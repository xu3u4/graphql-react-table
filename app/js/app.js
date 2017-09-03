import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import api from 'middleware/api';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';

import reducers from './reducers';
import TableFrame from './components/table_frame';

const composedMiddlewares = compose(
    applyMiddleware(ReduxThunk, api, client.middleware())
  );
const stores = createStore(reducers, {}, composedMiddlewares);
ReactDOM.render(
  <ApolloProvider store={stores} client={client}>
    <TableFrame />
  </ApolloProvider>,
  document.getElementById('app')
);
