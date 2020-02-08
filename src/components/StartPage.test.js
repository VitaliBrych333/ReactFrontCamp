import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import StartPage from './StartPage'
import { act } from 'react-dom/test-utils';
import SearchHeader from './SearchHeader'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";



Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Testpage Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <StartPage />
                </Provider>
            ).equals(true)
        ).toBe(true);
    });
});

// describe('<SearchHeader/>', () => {
//   let container = null;
//   beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

//   it('renders with string No films found', () => {
//     act(() => {
//       render(<SearchHeader />, container);
//     });
//     expect(container.textContent).toBe('No films found');
//   });


//   it('should render the component', () => {
//     const wrapper = shallow(<SearchHeader/>).dive();
//     ReactDOM.render(<SearchHeader />, container);
//     ReactDOM.unmountComponentAtNode(container);
//   });
// })
