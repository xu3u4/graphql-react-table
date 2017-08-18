import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RenderHeader from './render_header';
import RenderTbody from './render_tbody';

// component name must be Uppercamel case
class ViewIssues extends Component {
  constructor(props) {
    super(props);
    this.handleSelectIssue = this.handleSelectIssue.bind(this);
  }

  componentDidMount() {
    if (this.props.rows.length < 2) this.props.getIssues();
  }

  handleSelectIssue(selectIndex) {
    this.props.editIssue(this.props.rows[selectIndex]);
    this.props.removeIssueTemp(selectIndex);
  }

  render() {
    return (
      <div>
        <table>
          <RenderHeader
            columns={this.props.columns}
          />
          <RenderTbody
            columns={this.props.columns}
            rows={this.props.rows}
            onDeleteIssue={(id, seq) => this.props.deleteIssue(id, seq)}
            onSelectIssue={(i) => this.handleSelectIssue(i)}
            newIssue={this.props.newIssue}
          />
        </table>
      </div>
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
  ).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  newIssue: PropTypes.number.isRequired,
  editIssue: PropTypes.func.isRequired,
  deleteIssue: PropTypes.func.isRequired,
  removeIssueTemp: PropTypes.func.isRequired,
  getIssues: PropTypes.func.isRequired
};

export default ViewIssues;
