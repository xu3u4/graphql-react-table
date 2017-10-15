import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { ApolloProvider } from 'react-apollo';
import client from 'graphql/client';

import reducers from 'reducers';
import TableFrame from 'components/table_frame';
import '../css/table.scss';

const composedMiddlewares = compose(
    applyMiddleware(ReduxThunk, client.middleware())
  );
const stores = createStore(reducers, { apollo: {
  rows: [
    { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' }
  ] }
}, composedMiddlewares);
ReactDOM.render(
  <ApolloProvider store={stores} client={client}>
    <TableFrame />
  </ApolloProvider>,
  document.getElementById('app')
);
