import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { Chip, Button } from '@material-ui/core';

import faker from 'faker';
import sinon from 'sinon';

import LoginButton from '../../components/Account/LoginButton';
import LoggedInWidget from '../../components/Account/LoggedInWidget';

Enzyme.configure({ adapter: new Adapter() });

/*describe('Login Button', () => {
  it('Show a login button', () => {
    const Button = shallow(<LoginButton />);
    console.log(Button);
  });

  it('simulates click events', () => {
    // const onButtonClick = sinon.spy();
    const wrapper = shallow(<LoginButton />);
    wrapper.find('Button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});

describe('LoggedInWidget', () => {
  let user;

  beforeEach(() => {
    user = {
      name: faker.name.findName(),
      photo: {
        thumb_link: faker.image.imageUrl(),
      },
    };
  });
  it('Show a login button', () => {
    const wrapper = mount(<LoggedInWidget user={user} handleLogout={sinon.stub()} />);
    console.log(wrapper.html())
    expect(wrapper.find('div').first()).toEqual(1);
  });


  it('simulates click events', () => {
    // const onButtonClick = sinon.spy();
    const wrapper = shallow(<LoginButton />);
    wrapper.find('Button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});

describe('LoggedInWidget Snapshots', () => {
  let user;

  beforeEach(() => {
    user = {
      name: 'Seth McGuinness',
      photo: {
        thumb_link: 'http://lorempixel.com/50/50/',
      },
    };
  });
  it('renders LoggedInWidget correctly', () => {
    const component = renderer.create(<LoggedInWidget user={user} handleLogout={sinon.stub()} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LoginButton Snapshots', () => {
  it('renders LoggedInWidget correctly', () => {
    const component = renderer.create(<LoginButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});*/
