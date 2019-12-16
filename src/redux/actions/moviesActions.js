export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = data => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { data }
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
});

export function fetchMovies(sortBy, searchBy, value) {

    const request = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${value}&searchBy=${searchBy}&filter=action`

    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fetch(request)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMoviesSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchMoviesFailure(error)));
    };
}
