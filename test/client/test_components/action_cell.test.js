// import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import ActionCell from 'components/common/action_cell';

describe ('<ActionCell>', () => {
  const onAction = sinon.stub();
  const action = 'Delete';
  let actionCell;
  
  it ('render components', () => {
    actionCell = renderer.create(
      <ActionCell action={ onAction } >{ action }</ActionCell>
    );
    expect(actionCell).toMatchSnapshot();
  });

  it ('should call onAction when click', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(
    //   <ActionCell action={ onAction } >{ action }</ActionCell>
    // );
    // actionCell = renderer.getRenderOutput();
    // console.log(actionCell);
    actionCell = shallow(
      <ActionCell action={ onAction } >{ action }</ActionCell>
    );
    actionCell.find('button').simulate('click');
    expect(onAction.calledOnce).toBeTruthy();
  });
});