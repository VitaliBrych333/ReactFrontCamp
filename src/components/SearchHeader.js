import React, { Component, Fragment } from 'react';
import SearchFilm from './shared/SearchFilm';
import ButtonsCriteriaSearch from './shared/ButtonsCriteriaSearch';
import styled from 'styled-components'

const StyledHeader = styled.header`
    height: 346px;
    background-color: rgb(161, 144, 144);tom: 10px;

    .count-movie {
        padding: 10px 50px;
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
        background-color: rgb(90, 70, 70);
        color: beige;
    }
    
    .count-movie p {
        margin-left: 0;
    }

    h1 {
        padding: 70px 0 20px 50px;
    }

    p {
        display: inline-block;
        margin:  0 20px 0 50px;
        padding-top: 5px;
    }
`;

class SearchHeader extends Component {

    state = {
        kind: 'Sort',
        left: 'Release date',
        right: 'Rating'
    }

    render() {
        return (
            <Fragment>
                <StyledHeader> 
                    <SearchFilm/>
                    <div className="count-movie">
                        <p>4 Movie found</p>
                        <div>
                            <ButtonsCriteriaSearch buttonNames={this.state}/>
                        </div>
                    </div>
                </StyledHeader>
            </Fragment>
        );
    }
}

export default SearchHeader;
