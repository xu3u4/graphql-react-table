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
      type: 'ENTER_EDIT_MODE',
      payload: {}
    });
  });

  it('end edit mode', () => {
    expect(actions.endEditMode({})).toEqual({
      type: 'END_EDIT_MODE',
      payload: {}
    });
  });
});