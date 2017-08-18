export default function (state = {
  issues: [
    { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' }
  ],
  selectedIssue: {},
  newIssue: 0,
  isShowWarning: false
}, action) {
  switch (action.type) {
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: action.payload
      };
    case 'DELETE_ISSUE_SUCCESS':
      return {
        ...state,
        issues: [
          ...state.issues.slice(0, action.payload),
          ...state.issues.slice(action.payload + 1)
        ]
      };
    case 'CREATE_ISSUE_SUCCESS':
      return {
        ...state,
        isShowWarning: false,
        newIssue: action.payload.seq,
        selectedIssue: {},
        issues: [
          ...state.issues,
          action.payload
        ]
      };
    case 'UPDATE_ISSUE_SUCCESS': {
      return {
        ...state,
        isShowWarning: false,
        selectedIssue: {}
      };
    }
    case 'GET_NEW_ISSUE':
      return {
        ...state,
        newIssue: action.payload
      };
    case 'SHOW_WARNING':
      return {
        ...state,
        isShowWarning: action.payload
      };
    case 'ACTIVE_ISSUE':
      return {
        ...state,
        newIssue: 0,
        selectedIssue: action.payload,
        isShowWarning: false
      };
    default:
      return state;
  }
}
