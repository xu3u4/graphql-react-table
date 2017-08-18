import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

import RenderTbody from 'components/view_issues/render_tbody';

jest.mock('data');

describe('Render <RenderTbody>', () => {
  const { headers, issues } = require('data');
  const handleDeleteRow = sinon.stub(),
        selectIssue = sinon.stub();
  let tbody, newIssue = "1";

  beforeEach(() => {
    tbody = shallow(
      <RenderTbody
        columns={ headers }
        rows={ issues }
        onDeleteIssue={ handleDeleteRow }
        onSelectIssue={ selectIssue }
        newIssue={ newIssue }
      />
    );
  });

  it('should render tr, td', () => {
    tbody = renderer.create(
      <RenderTbody
        columns={ headers }
        rows={ issues }
        onDeleteIssue={ handleDeleteRow }
        onSelectIssue={ selectIssue }
        newIssue={ newIssue }
      />
    );
    expect(tbody).toMatchSnapshot();
  });

  it('should have different color if just updated', () => {
    expect(tbody.childAt(newIssue-1).hasClass('highlight')).toBetruthy;
  });

  it('should select issue when double click', () => {
    tbody.find('tr').first().simulate('doubleclick');
    expect(selectIssue.calledOnce).toBeTruthy;
  });
});
