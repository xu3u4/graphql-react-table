export default function (state = {
  selectedIssue: {},
  newIssue: 0,
  isShowWarning: false
}, action) {
  switch (action.type) {
    case 'SHOW_WARNING':
      return {
        ...state,
        isShowWarning: action.payload
      };
    case 'ENTER_EDIT_MODE':
      return {
        ...state,
        newIssue: 0,
        selectedIssue: action.payload,
        isShowWarning: false
      };
    case 'END_EDIT_MODE':
      return {
        ...state,
        newIssue: action.payload,
        selectedIssue: {},
        isShowWarning: false
      };
    default:
      return state;
  }
}
