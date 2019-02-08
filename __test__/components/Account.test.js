import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

import LoginButton from '../../components/Account/LoginButton';
import LoggedInWidget from '../../components/Account/LoggedInWidget';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Login Button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LoginButton />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    wrapper.setProps({ onClick: onButtonClick });
    wrapper.simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
  });
});

describe('LoggedInWidget', () => {
  let wrapper;
  beforeAll(() => {
    const user = {
      name: 'Keyshawn Larson',
      photo: {
        thumb_link: 'https://s3.amazonaws.com/uifaces/faces/twitter/bereto/128.jpg',
      },
    };
    const handleLogout = sinon.spy();
    wrapper = shallow(<LoggedInWidget handleLogout={handleLogout} user={user} />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the users name', () => {
    expect(wrapper).toBeTruthy();
  });
});
