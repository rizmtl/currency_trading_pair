import React from 'react';
import { Provider } from  'react-redux';
import { shallow } from 'enzyme';
import Store from '../store'
import App from '../App';

describe('App', () => {
  const wrapper = shallow(<App/>);
  it('Should render', () => {
    expect(wrapper.find('.App').exists()).toEqual(true)
  });
});
