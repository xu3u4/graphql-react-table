import React from 'react';

import Table from 'material-ui/Table';
import IssueHeader from 'containers/render_header';
import ViewIssues from 'containers/view_issues';
import EditIssue from 'containers/edit_issue';

const TableFrame = () => (
  <Table className="tableframe">
    <IssueHeader />
    <ViewIssues />
    <EditIssue />
  </Table>
);

export default TableFrame;
