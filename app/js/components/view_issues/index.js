import React from 'react';
import PropTypes from 'prop-types';

import RenderTbody from './render_tbody';

// component name must be Uppercamel case
const ViewIssues = (props) => {
  const {
    columns,
    rows,
    newIssue,
    editIssue,
    getNewRows,
    deleteIssue
  } = props;

  if (!Array.isArray(rows)) return false;

  const handleSelectIssue = (selectIndex) => {
    editIssue(rows[selectIndex]);
  };

  const handleDeleteIssue = (selectIndex) => {
    if (!(selectIndex > 0)) return false;
    return deleteIssue({ deleteId: selectIndex })
      .then(() => { getNewRows(); });
  };

  return (
    <RenderTbody
      columns={columns}
      rows={rows}
      onDeleteIssue={(seq) => handleDeleteIssue(seq)}
      onSelectIssue={(seq) => handleSelectIssue(seq)}
      newIssue={newIssue}
    />
  );
};

ViewIssues.defaultProps = {
  rows: []
};

ViewIssues.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      seq: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      Status: PropTypes.string,
      Category: PropTypes.string,
      Title: PropTypes.string,
      Owner: PropTypes.string,
      Priority: PropTypes.string
    })
  ),
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  newIssue: PropTypes.number.isRequired,
  editIssue: PropTypes.func.isRequired,
  deleteIssue: PropTypes.func.isRequired,
  getNewRows: PropTypes.func.isRequired
};

export default ViewIssues;
