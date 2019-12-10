import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    padding-top: 10px;

    div {
        border: 2px solid red;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 7px;
        font-size: 20px;
    }
    
    h3 {
        margin-right: 15px;
        margin-top: 5px;
    }

    & span {
        display: block;
        font-size: 12px;
    }
`;

const Rating = () => {
    return (
        <StyledDiv>
            <h3>Film name <span>Oscar movie</span></h3>
            <div>4.4</div>
        </StyledDiv>    
    );
};

export default Rating;