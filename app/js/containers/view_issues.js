import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editIssue, deleteIssue, getIssues, removeIssueTemp } from 'actions/action_index';
import ViewIssues from 'components/view_issues';

const mapStateToProps = (state) => ({
  rows: state.IssuesReducer.issues,
  columns: state.HeadsReducer,
  newIssue: state.IssuesReducer.newIssue
});

// Anything returned from here will be as props on this container
const mapDispatchToProps = (dispatch) => (
  // whenever editIssue is called, the result should be passed to all reducers
  bindActionCreators({
    editIssue,
    deleteIssue,
    getIssues,
    removeIssueTemp
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssues);
