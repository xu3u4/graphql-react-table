import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ children }) => <td>{ children }</td>;

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
