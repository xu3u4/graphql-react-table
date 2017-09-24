import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql, compose } from 'react-apollo';
import React, { Component } from 'react';

import * as queries from 'graphql/queries';
import { editIssue } from 'actions/action_index';
import ViewIssues from 'components/view_issues';

const mapStateToProps = (state) => ({
  rows: state.IssuesReducer.issues,
  columns: state.HeadsReducer,
  newIssue: state.IssuesReducer.newIssue
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    editIssue
  }, dispatch)
);

const ViewIssuesWithData = compose(
  graphql(queries.getIssues),
  graphql(queries.deleteIssue, {
    props: ({ data: { refetch } }) => ({
      deleteIssue: refetch
    }),
    options: {
      variables: { deleteId: 0 } 
    }
  })
)(ViewIssues);

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssuesWithData);
