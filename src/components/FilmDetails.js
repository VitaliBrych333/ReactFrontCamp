import React, { Component, Fragment } from 'react';
import Duration from './shared/FilmDuration';
import Rating from './shared/FilmRating';
import SignSearch from './shared/SignSearch';
import styled from 'styled-components'

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

    render() {
        return (
            <Fragment>
                <SignSearch/>
                <StyledWrapper>
                    <img src="https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" width="200" height="200" alt="Picture film"/>
                    <div className="describe">
                        <Rating/>
                        <Duration/>
                        <p>Amet eu commodo voluptate occaecat non ipsum ipsum tempor ex fugiat duis duis. Anim id non sint in ullamco. Laboris anim do qui enim sit consectetur eu excepteur ullamco id esse labore enim. Dolor ipsum elit tempor sit commodo consequat dolor nostrud veniam. Quis ea enim et consequat Lorem elit duis amet fugiat. Aute magna sint eu eiusmod minim eiusmod veniam eiusmod reprehenderit dolore reprehenderit. Aute amet exercitation aliquip eiusmod laborum ea deserunt laborum esse proident duis aliquip velit aliquip.Amet eu commodo voluptate occaecat non ipsum ipsum tempor ex fugiat duis duis. Anim id non sint in ullamco. Laboris anim do qui enim sit consectetur eu excepteur ullamco id esse labore enim. Dolor ipsum elit tempor sit commodo consequat dolor nostrud veniam. Quis ea enim et consequat Lorem elit duis amet fugiat. Aute magna sint eu eiusmod minim eiusmod veniam eiusmod reprehenderit dolore reprehenderit. Aute amet exercitation aliquip eiusmod laborum ea deserunt laborum esse proident duis aliquip velit aliquip</p>
                    </div>
                </StyledWrapper>
                <StyledDiv>
                    <p>Genre</p>
                </StyledDiv>
            </Fragment>
        )
    }
}

export default Details;
