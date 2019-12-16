import React, { Component, Fragment } from 'react';
import SearchHeader from './SearchHeader';
import CardFilm from './CardFilm';
import NotFound from './NotFound';
import FilmDetails from './FilmDetails'
import ErrorBoundary from './shared/ErrorBoundary';
import { connect } from 'react-redux';
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 25px;
    background-color:  rgb(209, 189, 189);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        margin-bottom: 10px;
    }
`;

class App extends Component {

    render() {
        const { error, loading, data } = this.props;

        return (
            <Fragment>
                <ErrorBoundary>
                    <SearchHeader/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <StyledSection>
                    {data.map(item =>
                    <CardFilm key={item.id}/>
          // <li key={product.id}>{product.name}</li>
        )}
                    </StyledSection>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
  data: state.movieReducer.data,
  loading: state.movieReducer.loading,
  error: state.movieReducer.error,
  search: state.criteriaReducer.search,
  sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(App);
