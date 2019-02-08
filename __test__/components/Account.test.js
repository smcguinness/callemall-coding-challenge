import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import faker from 'faker';
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
/*
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
