import React from 'react';
import PropTypes from 'prop-types';

const RenderHeader = ({ columns }) => {
  const Headers = columns.map((col) => <th key={col.key} >{ col.key }</th>);
  return (
    <thead>
      <tr>{ Headers }</tr>
    </thead>
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

export default RenderHeader;
