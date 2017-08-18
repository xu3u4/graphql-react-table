import React from 'react';
import PropTypes from 'prop-types';

import Cell from 'components/common/cell';
import ActionCell from 'components/common/action_cell';

const RenderTbody = (props) => {
  const renderRow = props.rows.map((row, i) => (
    <tr
      key={row.seq}
      onDoubleClick={() => props.onSelectIssue(i)}
      className={props.newIssue === row.seq ? 'highlight' : null}
    >
      {
        props.columns.map((col) => {
          if (col.key === 'Action') {
            return (
              <ActionCell
                key={col.key}
                action={() => props.onDeleteIssue(i, row.seq)}
              >
                Delete
              </ActionCell>
            );
          }
          return <Cell key={col.key} >{ row[col.key] }</Cell>;
        })
      }
    </tr>
  ));

  return (
    <tbody>{ renderRow }</tbody>
  );
};

RenderTbody.propTypes = {
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
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

export default RenderTbody;
