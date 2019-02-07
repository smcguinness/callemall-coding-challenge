import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

// describe('Login Button', () => {
//   it('Show a login button', () => {
//     const Button = shallow(<LoginButton />);
//     console.log(Button);
//   });
//
//   it('simulates click events', () => {
//     // const onButtonClick = sinon.spy();
//     const wrapper = shallow(<LoginButton />);
//     wrapper.find('Button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
// });
//
// describe('LoggedInWidget', () => {
//   it('Show a login button', () => {
//     const Button = shallow(<LoggedInWidget />);
//     console.log(Button);
//   });
//
//   it('simulates click events', () => {
//     // const onButtonClick = sinon.spy();
//     const wrapper = shallow(<LoginButton />);
//     wrapper.find('Button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
// });

// describe('With Snapshot Testing', () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
