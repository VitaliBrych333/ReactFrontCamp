import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import SignSearch from './SignSearch'
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignSearch/>', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  // it('renders with string 404 incorrect path', () => {
  //   const props = { pathname: 'test'};
  //   act(() => {
  //     render(<Router><SignSearch {...props}/></Router>, container);
  //   });
  //   expect(container.props('pathname')).toEqual('test');
  // });


  it('should render the component', () => {
    const wrapper = shallow(<Router><SignSearch /></Router>).dive();
    ReactDOM.render(<Router><SignSearch /></Router>, container);
    ReactDOM.unmountComponentAtNode(container);
  });
})
