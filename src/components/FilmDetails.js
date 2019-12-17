import React, { Component, Fragment } from 'react';
import Duration from './shared/FilmDuration';
import Rating from './shared/FilmRating';
import SignSearch from './shared/SignSearch';
import styled from 'styled-components'
import { fetchMovieId, fetchMoviesByGenre } from '../redux/actions/moviesActions';
import { connect } from 'react-redux';
import { useParams } from "react-router";

const StyledWrapper = styled.div`
    display: flex;
    margin: 20px;

    img {
        margin-right: 30px;
        width: 150px;
        height: 220px;
    }

    .describe {
        height: 220px;
    }

    & p:nth-child(3) {
        margin: 0;
        width: 100%;
        height: 125px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const StyledDiv = styled.div`
    padding: 10px 50px;
    background-color: rgb(90, 70, 70);
    color: beige;
    height: 45px;
`;

class Details extends Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
        console.log('componentDidMount()')
        this.props.dispatch(
            fetchMovieId(this.props.propsId.id));

        // this.props.dispatch(
        //       fetchMoviesByGenre(this.props.filmId.data.genres.join(', ')));

        // if (this.props.filmId.data) {
        //     console.log('ssssssssssssssss', this.props.filmId.data.genres.length.join(', '))

        // }
    }



    render() {
            const value = this.props.filmId.data;
            console.log('wwwwwwwwww', value)

            return (
              <Fragment>
                  <SignSearch/>
                      {
                          value && <Fragment>
                                        <StyledWrapper>
                                            <img src={value.poster_path} width="200" height="200" alt="Picture film"/>
                                            <div className="describe">
                                                <Rating propValue={value}/>
                                                <Duration propValue={value}/>
                                                <p>{value.overview}</p>
                                            </div>
                                        </StyledWrapper>
                                        <StyledDiv>
                                            <p>{value.genres.join(' ')}</p>
                                        </StyledDiv>
                                    </Fragment>
                      }
              </Fragment>
            )

    }
}

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    loading: state.movieReducer.loading,
    error: state.movieReducer.error,
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort,
    filmId: state.movieReducer.filmId
});

export default connect(mapStateToProps)(Details);
