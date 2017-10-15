import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from 'material-ui/Table';
import RenderTbody from './render_tbody';

// component name must be Uppercamel case
class ViewIssues extends Component {
  constructor(props) {
    super(props);
    this.handleSelectIssue = this.handleSelectIssue.bind(this);
  }

  handleSelectIssue(selectIndex) {
    this.props.editIssue(this.props.data.getIssues[selectIndex]);
  }

  render() {
    const { data } = this.props;
    return (
          <RenderTbody
            columns={this.props.columns}
            rows={data.getIssues || this.props.rows}
            onDeleteIssue={(seq) => {
              this.props.deleteIssue({deleteId: seq})
                .then(() => { data.refetch() })
            }}
            onSelectIssue={(i) => this.handleSelectIssue(i)}
            newIssue={this.props.newIssue}
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
  ).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  newIssue: PropTypes.number.isRequired,
  editIssue: PropTypes.func.isRequired
};

export default ViewIssues;
