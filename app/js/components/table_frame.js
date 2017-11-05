import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Table from 'material-ui/Table';
import IssueHeader from 'containers/render_header';
import ViewIssues from 'containers/view_issues';
import EditIssue from 'containers/edit_issue';

const TableFrame = ({ match: { params } }) => (
  <div>
    <NavLink
      to="/create"
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      Create
    </NavLink>
    <Table className="tableframe">
      <IssueHeader />
      <ViewIssues />
      <EditIssue filter={params.filter || '/'} />
    </Table>
  </div>
);

TableFrame.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string
    })
  })
};

TableFrame.defaultProps = {
  match: { params: { filter: '' } }
};

export default TableFrame;
