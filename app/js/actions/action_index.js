import { CALL_API } from '../middleware/api';

export function removeIssueTemp(id) {
  return {
    type: 'DELETE_ISSUE_SUCCESS',
    payload: id
  };
}

export function getNewIssue(seq) {
  return {
    type: 'GET_NEW_ISSUE',
    payload: seq
  };
}

export function editIssue(issue) {
  return {
    type: 'ACTIVE_ISSUE',
    payload: issue
  };
}

export function showWarning() {
  return {
    type: 'SHOW_WARNING',
    payload: true
  };
}

export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_ERROR = 'GET_ISSUES_ERROR';
export const getIssues = () => ({
  [CALL_API]: {
    endpoint: '/issues',
    method: 'GET',
    types: [GET_ISSUES_SUCCESS, GET_ISSUES_ERROR]
  }
});

export const CREATE_ISSUE_SUCCESS = 'CREATE_ISSUE_SUCCESS';
export const CREATE_ISSUE_FAILED = 'CREATE_ISSUE_FAILED';
export const createIssue = (newIssue) => ({
  [CALL_API]: {
    endpoint: '/new_issue',
    method: 'POST',
    types: [CREATE_ISSUE_SUCCESS, CREATE_ISSUE_FAILED],
    body: newIssue
  }
});

export const UPDATE_ISSUE_SUCCESS = 'UPDATE_ISSUE_SUCCESS';
export const UPDATE_ISSUE_FAILED = 'UPDATE_ISSUE_FAILED';
export const updateIssues = (issue) => ({
  [CALL_API]: {
    endpoint: `/${issue.seq}/edit`,
    method: 'POST',
    types: [UPDATE_ISSUE_SUCCESS, UPDATE_ISSUE_FAILED],
    body: issue,
    cb: (dispatch) => {
      dispatch(getIssues());
      dispatch(getNewIssue(issue.seq));
    }
  }
});

export const DELETE_ISSUE_SUCCESS = 'DELETE_ISSUE_SUCCESS';
export const DELETE_ISSUE_FAILED = 'DELETE_ISSUE_FAILED';
export const deleteIssue = (id, deleteSeq) => ({
  [CALL_API]: {
    endpoint: `/${deleteSeq}/delete`,
    method: 'GET',
    types: [DELETE_ISSUE_SUCCESS, DELETE_ISSUE_FAILED],
    cb: (dispatch) => dispatch(removeIssueTemp(id))
  }
});
