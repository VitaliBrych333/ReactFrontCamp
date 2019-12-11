import React, { Component, Fragment } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import ButtonsCriteriaSearch from './ButtonsCriteriaSearch';
import styled from 'styled-components'

const StyledGroup = styled(InputGroup)`
    padding: 0 50px;
`;

class SearchFilm extends Component {
    state = {
        kind: 'Search',
        left: 'Title',
        right: 'Genre'
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
                    />
                    <InputGroup.Append>
                        <Button variant="outline-danger">Search</Button>
                    </InputGroup.Append>
                </StyledGroup>
                <ButtonsCriteriaSearch buttonNames={this.state}/>
            </Fragment>
        )
    }
}

export default SearchFilm;