import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RenderTbody from './render_tbody';

// component name must be Uppercamel case
class ViewIssues extends Component {
  constructor(props) {
    super(props);
    this.handleSelectIssue = this.handleSelectIssue.bind(this);
  }

  handleSelectIssue(selectIndex) {
    this.props.editIssue(this.props.rows[selectIndex]);
  }

  render() {
    const { getNewRows, columns, rows, newIssue } = this.props;

    if (!Array.isArray(rows)) return false;
    return (
      <RenderTbody
        columns={columns}
        rows={rows}
        onDeleteIssue={(seq) => {
          if (!(seq > 0)) return false;
          return this.props.deleteIssue({ deleteId: seq })
            .then(() => { getNewRows(); });
        }}
        onSelectIssue={(i) => this.handleSelectIssue(i)}
        newIssue={newIssue}
      />
    ); // end return
  } // end render
} // end class

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
