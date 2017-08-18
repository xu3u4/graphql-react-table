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

  it('should handle ISSUE_DELETED', () => {
    expect(IssuesReducer({issues}, {
      type: 'DELETE_ISSUE_SUCCESS',
      payload: 1
    })).toEqual({ issues: deleteIssue1 });
  });

  describe('should handle UPDATE_ISSUES', () => {
    it('when data modefied', () => {
      expect(IssuesReducer({
        issues: issues
      }, {
        type: 'UPDATE_ISSUE_SUCCESS',
        payload: { seq: '2', Status: 'Close', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' }
      })).toEqual({
        issues: issues,
        selectedIssue: {},
        isShowWarning: false
      });
    });

    it('when data added', () => {
      expect(IssuesReducer(undefined, {
        type: 'CREATE_ISSUE_SUCCESS',
        payload: { seq: 5, Status: 'Close', Category: 'cat3', Title: 'title2', Owner: 'Jo', Priority: '3' }
      })).toEqual({
        issues: [
          ...defaultIssues,
          { seq: 5, Status: 'Close', Category: 'cat3', Title: 'title2', Owner: 'Jo', Priority: '3' }
        ],
        selectedIssue: {},
        newIssue: 5,
        isShowWarning: false
      });
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

  describe('when handle ACTIVE_ISSUE', () => {
    it('should set selected issue', () => {
      expect(IssuesReducer(undefined, {
        type: 'ACTIVE_ISSUE',
        payload: issues[1]
      })).toEqual({
        issues: defaultIssues,
        selectedIssue: issues[1],
        newIssue: 0,
        isShowWarning: false
      });
    });

    // it('should put previous selected issue to newIssue', () => {
    //   expect(IssuesReducer({
    //     selectedIssue: { seq: '1', Status: 'open', Owner: 'Jo'}
    //   }, {
    //     type: 'ACTIVE_ISSUE',
    //     payload: {}
    //   })).toEqual({
    //     selectedIssue: {},
    //     newIssue: 0,
    //     isShowWarning: false
    //   });
    // });
  });
});