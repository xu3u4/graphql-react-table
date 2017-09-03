import { combineReducers } from 'redux';

import client from 'graphql/client';
import IssuesReducer from './reducer_issues.js';
import HeadsReducer from './reducer_heads.js';

const rootReducer = combineReducers({
  IssuesReducer,
  HeadsReducer,
  apollo: client.reducer()
});

export default rootReducer;
