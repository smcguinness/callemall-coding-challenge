import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

import RSVPList from '../../components/RsvpList';
import ResponseIcon from '../../components/RsvpList/ResponseIcon';
import RSVPItem from '../../components/RsvpList/RSVPItem';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('RSVP List', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<RSVPList />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('RSVP Item', () => {
  let wrapper;
  beforeAll(() => {
    const props = {
      guests: 1,
      member: {
        id: 12345,
        name: 'John Smith',
      },
      response: 'yes',
    };
    wrapper = shallow(<RSVPItem {...props} />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Response Icon', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ResponseIcon />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
