import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TableHead, TableRow, TableCell } from 'material-ui/Table';

const RenderHeader = ({ columns }) => {
  const Headers = columns.map((col) => <TableCell key={col.key} >{ col.key }</TableCell>);
  return (
    <TableHead>
      <TableRow>{ Headers }</TableRow>
    </TableHead>
  );
};

RenderHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = (state) => ({
  columns: state.HeadsReducer
});

const IssueHeader = connect(mapStateToProps)(RenderHeader);
export default IssueHeader;
