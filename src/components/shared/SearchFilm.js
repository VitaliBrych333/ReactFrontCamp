import React, { Component, Fragment } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import ButtonsCriteriaSearch from './ButtonsCriteriaSearch';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/moviesActions';


const StyledGroup = styled(InputGroup)`
    padding: 0 50px;
`;

class SearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: 'Search',
            left: 'Title',
            right: 'Genre',
            disabled: true
        }
    }

    handleClick() {
        console.log('ddddd', this.props.search)
        this.props.dispatch(
            fetchMovies(this.props.sort, this.props.search, this.myInput.value));
    }

    handleChange() {
        const value = this.myInput.value;

        value ? this.setState({disabled: false})
              : this.setState({disabled: true})
    }

    render() {
        return (
            <Fragment>
                <h1>Find your movie</h1>
                <StyledGroup className="mb-3">
                    <FormControl
                        placeholder="Please write the film name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        ref={value => { this.myInput = value; }}
                        onChange={() => this.handleChange()}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-danger" onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Search</Button>
                    </InputGroup.Append>
                </StyledGroup>
                <ButtonsCriteriaSearch buttonNames={this.state}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    data: state.movieReducer.data,
    loading: state.movieReducer.loading,
    error: state.movieReducer.error,
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(SearchFilm);
