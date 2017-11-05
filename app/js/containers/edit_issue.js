import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql, compose } from 'react-apollo';

import * as queries from 'graphql/queries';
import { showWarning, endEditMode } from 'actions/action_index';
import EditIssue from 'components/edit_issue';

const mapStateToProps = (state, ownProps) => ({
  columns: state.HeadsReducer,
  selectedIssue: state.IssuesReducer.selectedIssue,
  isShowWarning: state.IssuesReducer.isShowWarning,
  routeName: ownProps.filter
});

const mapDispatchtoProps = (dispatch) => (
  bindActionCreators({
    showWarning,
    endEditMode
  }, dispatch)
);

const CreateIssueMutation = compose(
  graphql(queries.createIssue, { name: 'createIssueMutation' }),
  graphql(queries.updateIssue, { name: 'updateIssueMutation' })
)(EditIssue);
export default connect(mapStateToProps, mapDispatchtoProps)(CreateIssueMutation);
