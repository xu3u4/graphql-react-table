import React from 'react';
import renderer from 'react-test-renderer';

import Cell from 'components/common/cell';

describe('Render <Cell>', () => {
  const value = "Jocelyn";
  const cell = renderer.create(
    <Cell>{ value }</Cell>
  );
  
  it('should render <td> with children', () => {
    expect(cell).toMatchSnapshot();
  });
});
