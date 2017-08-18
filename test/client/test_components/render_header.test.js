import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RenderHeader from 'components/view_issues/render_header';

jest.mock('data');

describe('Render <RenderHeader>', () => {
  const { headers } = require('data'); // eslint-disable-line
  const thead = renderer.create(
    <RenderHeader columns = {headers} />
  );

  it('should render all columns inside <thead>', function() {
    expect(thead).toMatchSnapshot();
  });
});
