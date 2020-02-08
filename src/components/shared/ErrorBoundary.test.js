import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary'
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<ErrorBoundary/>', () => {
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

  it('returns undefined', () => {
    expect(shallow(<ErrorBoundary />).equals(undefined)).toBe(true);;
  });


  // it('should render the component', () => {
  //   const wrapper = shallow(<ErrorBoundary/>);
  //   ReactDOM.render(<ErrorBoundary />, container);
  //   ReactDOM.unmountComponentAtNode(container);
  // });
})
