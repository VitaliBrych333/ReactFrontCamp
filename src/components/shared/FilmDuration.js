import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  p {
    margin: 0 30px 0 0;
    font-size: 18px;
    display: inline-block;
  }

  span {
    color: red;
  }
`;

const Duration = () => {
    return (
        <StyledDiv>
            <p><span>1999</span> year</p>
            <p><span>195</span> min</p>
        </StyledDiv>    
    );
};

export default Duration;