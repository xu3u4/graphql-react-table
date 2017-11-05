import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { ApolloProvider } from 'react-apollo';
import client from 'graphql/client';

import reducers from 'reducers';
import TableFrame from './table_frame';

const composedMiddlewares = compose(
    applyMiddleware(ReduxThunk, client.middleware())
  );
const stores = createStore(reducers, {}, composedMiddlewares);

const Root = () => (
  <ApolloProvider store={stores} client={client}>
    <Router>
      <Route path="/:filter?" component={TableFrame} />
    </Router>
  </ApolloProvider>
);

export default Root;
