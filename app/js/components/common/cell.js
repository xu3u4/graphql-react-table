import React from 'react';
import PropTypes from 'prop-types';

import { TableCell } from 'material-ui/Table';

const Cell = ({ children }) => <TableCell>{ children }</TableCell>;

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

Cell.defaultProps = {
  children: ''
};

export default Cell;
