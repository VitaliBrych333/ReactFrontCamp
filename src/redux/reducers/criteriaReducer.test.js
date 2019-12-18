import criteriaReducer from './criteriaReducer';
import * as actions from '../actions/criteriaActions';
import expect from 'expect';

describe('criteriaReducer', () => {
    it('should return the initial state', () => {
        expect(criteriaReducer(undefined, {})).toEqual({'search': 'title', 'sort': 'release_date'});
    });

    it('should handle SET_SEARCH', () => {
        const expectedAction = {
            type: actions.SET_SEARCH,
            payload: {
                search: 'genre'
            }
        }

        expect(actions.setSearch('genre')).toEqual(expectedAction);
    });

    it('should handle SET_SORT', () => {
        const expectedAction = {
            type: actions.SET_SORT,
            payload: {
                sort: 'release'
            }
        }

        expect(actions.setSort('release')).toEqual(expectedAction);
    });
});
