import React, { Component, Fragment } from 'react';
import SearchHeader from './SearchHeader';
import CardFilm from './CardFilm';
import NotFound from './NotFound';
import FilmDetails from './FilmDetails'
import ErrorBoundary from './shared/ErrorBoundary';
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
        return (
            <Fragment>
                <ErrorBoundary>
                    <SearchHeader/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <StyledSection>
                        <CardFilm/>
                        <CardFilm/>
                        <CardFilm/>
                        <CardFilm/>
                    </StyledSection>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default App;
