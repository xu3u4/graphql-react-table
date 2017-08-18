import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import ActionCell from 'components/common/action_cell';
import Cell from 'components/common/cell';
import EditCell from 'components/common/edit_cell';

class EditIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editRow: this.props.selectedIssue || {}
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedIssue.seq !== nextProps.selectedIssue.seq) {
      this.setState({
        editRow: nextProps.selectedIssue
      });
    }
  }

  handleInput(key, value) {
    this.setState({
      editRow: update(this.state.editRow, {
        [key]: { $set: value.trim() }
      })
    });
  }

  handleUpdateIssues() {
    const inputFields = Object.keys(this.state.editRow).filter((key) => {
      // exclude seq, cause it is auto generated
      return key !== 'seq' && this.state.editRow[key].length;
    });

    if (Object.values(inputFields).length < 5) {
      this.props.showWarning();
      return;
    }

    if (this.props.selectedIssue.seq) {
      this.props.updateIssues(this.state.editRow);
    } else {
      this.props.createIssue(this.state.editRow);
    }

    this.setState({
      editRow: {}
    });
  }

  renderEditRow() {
    return (this.props.columns.map((col) => {
      switch (col.key) {
        case 'seq':
          return <Cell key={col.key}>{ this.props.selectedIssue.seq || col.key }</Cell>;
        case 'Action':
          return (
            <ActionCell
              key={col.key}
              action={() => this.handleUpdateIssues()}
            >
              { this.props.selectedIssue.seq ? 'Update' : 'Add' }
            </ActionCell>
          );
        default:
          return (
            <EditCell
              key={col.key}
              columnName={col.key}
              onInput={(event) => this.handleInput(col.key, event.target.value)}
              editingIssue={this.props.selectedIssue}
              isShowWarning={this.props.isShowWarning}
            >
              { this.state.editRow[col.key] || '' }
            </EditCell>
          );
      }
    }));
  }

  render() {
    return (
      <table>
        <tbody><tr>{ this.renderEditRow() }</tr></tbody>
      </table>
    );
  }
}

EditIssue.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
  selectedIssue: PropTypes.shape({
    seq: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    Status: PropTypes.string,
    Category: PropTypes.string,
    Title: PropTypes.string,
    Owner: PropTypes.string,
    Priority: PropTypes.string
  }).isRequired,
  updateIssues: PropTypes.func.isRequired,
  showWarning: PropTypes.func.isRequired,
  createIssue: PropTypes.func.isRequired,
  isShowWarning: PropTypes.bool.isRequired
};

export default EditIssue;
