import { GET_MOVIES, SET_SEARCH, SET_SORT } from '../actions/criteriaActions';

const initialState = {
    data: [],
    search: 'title',
    sort: 'release date'
};

function criteriaReducer(state = initialState, action) {
    switch(action.type) {
        case GET_MOVIES:
            return Object.assign({}, state, {
                data: state.data.concat(action.payload)
            });

        case SET_SEARCH:
            return Object.assign({}, state, {
                search: action.payload
            });

        case SET_SORT:
            return Object.assign({}, state, {
                sort: action.payload
            });

        default:
            return state;
    };
}

export default criteriaReducer;

