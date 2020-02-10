import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import StartPage from './StartPage'
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

describe('<StartPage/>', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  const initialState = {
    movieReducer: {
      movies: {
        data: [],
        total: 0
      }
    },
    criteriaReducer: {
      search: 'search',
      sort: 'sort'
    },
  }
  const mockStore = configureStore()
  let store,wrapper

  beforeEach(()=>{
      store = mockStore(initialState)
      wrapper = shallow(<Provider store={store}><StartPage /></Provider>)
  })

  it('render component', () => {
     expect(wrapper.find(StartPage).length).toEqual(1)
  });

  it('should equals to snapshot of CriteriaSearch', () => {

    const renderedValue = renderer.create(<Provider store={store}><StartPage /></Provider>).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });

  // it('should click on buttons when sort by release/rating', () => {
  //   const state = {
  //     kind: 'Sort',
  //     left: 'Release date',
  //     right: 'Rating'
  //   }
  //   act(() => {
  //     ReactDOM.render(<Provider store={store}><CriteriaSearch buttonNames={state}/></Provider>, container);
  //   });

  //   const button = container.querySelectorAll('button');
  //   act(() => {
  //     button[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
  //   });
  //   expect(document.title).toBe('');
  //   act(() => {
  //     button[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
  //   });
  //   expect(document.title).toBe('');
  // });


})
