import { combineReducers } from 'redux';
import IssuesReducer from './reducer_issues.js';
import HeadsReducer from './reducer_heads.js';

const rootReducer = combineReducers({
  IssuesReducer,
  HeadsReducer
});

export default rootReducer;
