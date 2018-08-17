import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  const onClick = () => {};

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Button onClick={onClick}>Give Me More</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button onClick={onClick}>Give Me More</Button>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('shows just one button', () => {
    const element = shallow(
      <Button onClick={onClick}>Click me!</Button>
    );

    expect(element.find('button').length).toBe(1);
  });
});
