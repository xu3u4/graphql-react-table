import React from 'react';

import ViewIssues from 'containers/view_issues';
import EditIssue from 'containers/edit_issue';
import '../../css/table.scss';


const TableFrame = () => (
  <div>
    <ViewIssues />
    <EditIssue />
  </div>
);

export default TableFrame;
