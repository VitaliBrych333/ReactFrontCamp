import movieReducer from './movieReducer';
import * as actions from '../actions/moviesActions';
import expect from 'expect';

describe('movieReducer', () => {
    it('should return the initial state', () => {
        expect(movieReducer(undefined, {})).toEqual({ movies: { data: [], total: 0 }, filmId: {}, loading: false, error: null});
    });

    it('should handle FETCH_MOVIES_BEGIN', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_BEGIN,
        }

        expect(actions.fetchMoviesBegin()).toEqual(expectedAction);
    });

    it('should handle FETCH_MOVIES_SUCCESS', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_SUCCESS,
            payload: {
                data: 'test',
            },
        }

        expect(actions.fetchMoviesSuccess('test')).toEqual(expectedAction);
    });

    it('should handle FETCH_MOVIES_FAILURE', () => {
        const expectedAction = {
            type: actions.FETCH_MOVIES_FAILURE,
            payload: {
                error: 'testError',
            },
        }

        expect(actions.fetchMoviesFailure('testError')).toEqual(expectedAction);
    });

    it('should handle FETCH_FILMID_BEGIN', () => {
        const expectedAction = {
            type: actions.FETCH_FILMID_BEGIN,
        }

        expect(actions.fetchFilmIdBegin()).toEqual(expectedAction);
    });

    it('should handle FETCH_FILMID_SUCCESS', () => {
        const expectedAction = {
            type: actions.FETCH_FILMID_SUCCESS,
            payload: {
                data: 'test',
            },
        }

        expect(actions.fetchFilmIdSuccess('test')).toEqual(expectedAction);
    });

    it('should handle FETCH_FILMID_FAILURE', () => {
        const expectedAction = {
            type: actions.FETCH_FILMID_FAILURE,
            payload: {
                error: 'testError',
            },
        }

        expect(actions.fetchFilmIdFailure('testError')).toEqual(expectedAction);
    });

    it('should handle SORT_RELEASE', () => {
        const expectedAction = {
            type: actions.SORT_RELEASE,
            payload: {
                data: 'release'
            }
        }

        expect(actions.sortRelease('release')).toEqual(expectedAction);
    });

    it('should handle SORT_RATING', () => {
        const expectedAction = {
            type: actions.SORT_RATING,
            payload: {
                data: 'rating'
            }
        }

        expect(actions.sortRating('rating')).toEqual(expectedAction);
    });


});
