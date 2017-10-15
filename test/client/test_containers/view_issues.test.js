import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import * as queries from 'graphql/queries';
import InitialState from 'reducers';
import ViewIssuesContainer from 'containers/view_issues';

describe('<ViewIssues> container', () => {
  const mockData = 
    {[
      {
          request: { query: queries.getIssues },
          result: { data: mockedData }
      }
    ]};
  const container = (
    <MockedProvider >
    </MockedProvider>
    )



  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);
  let action = () => ({}), wrapper, store;

  beforeEach(() => {
    store = mockStore(InitialState(undefined, action()));
    store.dispatch(action());
    wrapper = shallow(
      <ViewIssuesContainer store={store}/>
    );
  });
  describe('with default settings', () => {
    it('should render <ViewIssues>', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
