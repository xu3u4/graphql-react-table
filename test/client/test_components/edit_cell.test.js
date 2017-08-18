import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

import EditCell from 'components/common/edit_cell';

describe('Render <EditCell>', () => {
  const onChange = sinon.stub();
  let isShowWarning = false;
  let editcell;
  let value = '';

  beforeEach(() => {
    editcell = shallow(
      <EditCell onInput={ onChange } isShowWarning={ isShowWarning }>{ value }</EditCell>
    );
  });

  it('should have <input> inside <td>', () => {
    editcell = renderer.create(
      <EditCell onInput={ onChange } isShowWarning={ isShowWarning }>{ value }</EditCell>
    );
    expect(editcell).toMatchSnapshot();
  });

  it('should call onChange when input', () => {
    editcell.find('input').simulate('change');
    expect(onChange.calledOnce).toBeTruthy;
  });

  describe('if value is set', () => {
    value = 'cat1';

    it('input should have default value', () => {
      expect(editcell.find('input').prop('value')).toEqual('cat1');
    });
  });
});