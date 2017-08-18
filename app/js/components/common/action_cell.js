import React from 'react';
import PropTypes from 'prop-types';

const ActionCell = ({ action, children }) => (
  <td>
    <button onClick={action}>{ children }</button>
  </td>
);

ActionCell.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default ActionCell;
