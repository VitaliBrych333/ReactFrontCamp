import React, { Component, Fragment } from 'react';
import SearchHeader from './SearchHeader';
import CardFilm from './CardFilm';
import NotFound from './NotFound';
import FilmDetails from './FilmDetails'
import ErrorBoundary from './shared/ErrorBoundary';
import { connect } from 'react-redux';
import styled from 'styled-components'


import StartPage from './StartPage';
import DetailsPage from './DetailsPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const StyledSection = styled.section`
    padding: 25px;
    background-color:  rgb(209, 189, 189);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
        margin-bottom: 10px;
    }
`;

class App extends Component {

    render() {
        const { error, loading, data } = this.props;

        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <StartPage data={this.props.data}/>
                        </Route>
                        <Route path="/movies/:id">
                            <DetailsPage/>
                        </Route>
                    </Switch>
              </Router>
                {/* <ErrorBoundary>
                    <SearchHeader count={this.props.total}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <StyledSection>
                    {data.map(item => <CardFilm key={item.id} info={item}/> )}
                    </StyledSection>
                </ErrorBoundary> */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
  data: state.movieReducer.movies.data,
  total: state.movieReducer.movies.total,
  loading: state.movieReducer.loading,
  error: state.movieReducer.error,
  search: state.criteriaReducer.search,
  sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(App);
