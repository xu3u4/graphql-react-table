import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import InitialState from 'reducers';
import ViewIssuesContainer from 'containers/view_issues';

describe('<ViewIssues> container', () => {
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

  describe('dispatch an action', () => {
    action = () => ({ type: 'DELETE_ISSUE_SUCCESS' });
    it('should get dispatched action', () => {
      const getAction = store.getActions();
      expect(getAction).toEqual([{ type: 'DELETE_ISSUE_SUCCESS' }]);
    });
  });
});
