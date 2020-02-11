import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CardFilm from './CardFilm';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardFilm/>', () => {
  const initialState = {
    movieReducer: {
      movies: {
        data: [],
        total: 0
      }
    },
    criteriaReducer: {
      search: 'search',
      sort: 'sort',
    },
  };

  const info = {
      poster_path: 'test',
      release_date: 'test',
      genres: [],
      title: 'test',
      id: 1
  };

  const props = {
    info,
  };

  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>)
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render component', () => {
     expect(wrapper.find(CardFilm).length).toEqual(1);
  });

  it('should equals to snapshot of CardFilm', () => {
    const renderedValue = renderer.create(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  // it('should click on buttons when sort by name/genre', () => {
  //   act(() => {
  //     ReactDOM.render(<Provider store={store}><Router><CardFilm {...props}/></Router></Provider>, container);
  //   });

  //   const link = container.querySelector('a');
  //   act(() => {
  //     link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  //   });
  //   expect(document.title).toBe('');

  // });
})
