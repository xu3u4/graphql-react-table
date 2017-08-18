import React from 'react';
import PropTypes from 'prop-types';

const EditCell = (props) => {
  const showMessage = props.isShowWarning && !props.children.length;

  return (
    <td className="editCell">
      <input
        className={`input_row ${showMessage ? 'warning' : null}`}
        onChange={props.onInput}
        value={props.children}
      />
      <span
        className={showMessage ? 'showMessage' : 'hideMessage'}
      >
        *Required
      </span>
    </td>
  );
};

EditCell.propTypes = {
  isShowWarning: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default EditCell;
