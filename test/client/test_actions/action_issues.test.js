// import fetchMock from 'fetch-mock';
import { CALL_API } from 'middleware/api';
import sinon from 'sinon';

import * as actions from 'actions/action_index';
import * as ActionTypes from 'actions/action_index';

jest.mock('data');
const { headers, issues, defaultIssues, deleteIssue1 } = require('data');
const cb = () => {};

describe('action_index.js', () => {
  it('show warning', () => {
    expect(actions.showWarning()).toEqual({
      type: 'SHOW_WARNING',
      payload: true
    });
  });

  it('edit issue', () => {
    expect(actions.editIssue({})).toEqual({
      type: 'ACTIVE_ISSUE',
      payload: {}
    });
  });

  it('get issues', () => {
    const expectedAction = {
      endpoint: '/issues',
      method: 'GET',
      types: [ActionTypes.GET_ISSUES_SUCCESS, ActionTypes.GET_ISSUES_ERROR]
    };
    expect(actions.getIssues()[CALL_API]).toEqual(expectedAction);
  });

  it('create issue', () => {
    const expectedAction = {
      endpoint: '/new_issue',
      method: 'POST',
      types: [ActionTypes.CREATE_ISSUE_SUCCESS, ActionTypes.CREATE_ISSUE_FAILED],
      body: defaultIssues
    };
    expect(actions.createIssue(defaultIssues)[CALL_API]).toEqual(expectedAction);
  });

  it('update issues', () => {
    const issue = {seq: 2};
    const expectedAction = {
      endpoint: `/${issue.seq}/edit`,
      method: 'POST',
      types: [ActionTypes.UPDATE_ISSUE_SUCCESS, ActionTypes.UPDATE_ISSUE_FAILED],
      body: issue,
      cb: cb
    };
    expect(actions.updateIssues({ seq: 2})[CALL_API].endpoint).toEqual(expectedAction.endpoint);
  });

  it('delete issue', () => {
    const expectedAction = {
      endpoint: '/1/delete',
      method: 'GET',
      types: [ActionTypes.DELETE_ISSUE_SUCCESS, ActionTypes.DELETE_ISSUE_FAILED],
      cb: cb
    };
    expect(actions.deleteIssue(3, 1)[CALL_API].endpoint).toEqual(expectedAction.endpoint);
  });
});