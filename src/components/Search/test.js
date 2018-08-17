import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from './';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Search', () =>{
  const onChange = () => {};
  const onSubmit = () => {};

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Search
        onChange={onChange}
        onSubmit={onSubmit}
      >
        Search
      </Search>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Search
        onChange={onChange}
        onSubmit={onSubmit}
      >
        Search
      </Search>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
