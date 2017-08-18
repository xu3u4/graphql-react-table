import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import InitialState from 'reducers';
import EditIssueContainer from 'containers/edit_issue';

describe('<EditIssue> container', () => {
  const middleWares = [thunk];
  const mockStore = configureMockStore(middleWares);
  let action = () => ({}), wrapper, store;

  beforeEach(() => {
    store = mockStore(InitialState(undefined, action()));
    store.dispatch(action());
    wrapper = shallow(
      <EditIssueContainer store={store}/>
    );
  });
  describe('with default settings', () => {
    it('should render <EditIssue>', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('dispatch an action', () => {
    action = () => ({ type: 'UPDATE_ISSUE_SUCCESS' });
    it('should get dispatched action', () => {
      const getAction = store.getActions();
      expect(getAction).toEqual([{ type: 'UPDATE_ISSUE_SUCCESS' }]);
    });
  });
});
