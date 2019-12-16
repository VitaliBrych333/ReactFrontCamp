export const GET_MOVIES = 'GET_MOVIES';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';

export const getMovies = data => ({
    type: 'GET_MOVIES',
    payload: {
        data: data
    }
})

export const setSearch = text => ({
    type: 'SET_SEARCH',
    payload: {
        search: text
    }
})

export const setSort = text => ({
    type: 'SET_SORT',
    payload: {
        sort: text
    }
})

export const VisibilityFilters = {
    GET_MOVIES: 'GET_MOVIES',
    SET_SEARCH: 'SET_SEARCH',
    SET_SORT: 'SET_SORT'
}
