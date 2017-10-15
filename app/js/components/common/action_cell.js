import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

const ActionCell = ({ action, children }) => (
  <td>
    <Button raised onClick={action} color="accent" className="button_margin">{ children }</Button>
  </td>
);

ActionCell.propTypes = {
  children: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default ActionCell;
