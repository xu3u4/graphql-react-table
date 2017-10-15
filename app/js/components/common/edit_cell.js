import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import { TableCell } from 'material-ui/Table';

const EditCell = (props) => {
  const showMessage = props.isShowWarning && !props.children.length;

  return (
    <TableCell className="editCell">
      <TextField
        onChange={props.onInput}
        value={props.children}
        helperText="*Required"
        error={showMessage}
      />
    </TableCell>
  );
};

EditCell.propTypes = {
  isShowWarning: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default EditCell;
