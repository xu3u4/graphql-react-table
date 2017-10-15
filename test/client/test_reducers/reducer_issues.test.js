import IssuesReducer from 'reducers/reducer_issues';

jest.mock('data');
const { headers, issues, defaultIssues, deleteIssue1 } = require('data');

describe('reducer_issues.js', () => {
  it('should handle initial state', () => {
    expect(IssuesReducer(undefined, {})).toEqual({
      issues: defaultIssues,
      selectedIssue: {},
      newIssue: 0,
      isShowWarning: false
    });
  });

  it('should handle SHOW_WARNING', () => {
    expect(IssuesReducer(undefined, {
      type: 'SHOW_WARNING',
      payload: true
    })).toEqual({
      issues: defaultIssues,
      selectedIssue: {},
      newIssue: 0,
      isShowWarning: true
    });
  });

  describe('when handle EDIT_MODE change', () => {
    it('should set selected issue', () => {
      expect(IssuesReducer(undefined, {
        type: 'ENTER_EDIT_MODE',
        payload: issues[1]
      })).toEqual({
        issues: defaultIssues,
        selectedIssue: issues[1],
        newIssue: 0,
        isShowWarning: false
      });
    });

    it('should set selected issue', () => {
      expect(IssuesReducer(undefined, {
        type: 'END_EDIT_MODE',
        payload: issues[1]
      })).toEqual({
        issues: defaultIssues,
        selectedIssue: {},
        newIssue: issues[1],
        isShowWarning: false
      });
    });
  });
});