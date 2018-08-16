import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Loading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Loading />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('shows just one loading', () => {
    const element = shallow(
      <Loading />
    );

    expect(element.find('.loading').length).toBe(1);
  });
});
