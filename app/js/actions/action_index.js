export function editIssue(issue) {
  return {
    type: 'ENTER_EDIT_MODE',
    payload: issue
  };
}

export function endEditMode(editedIssue) {
  return {
    type: 'END_EDIT_MODE',
    payload: editedIssue
  };
}

export function showWarning() {
  return {
    type: 'SHOW_WARNING',
    payload: true
  };
}
