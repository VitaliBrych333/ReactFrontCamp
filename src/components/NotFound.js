import React from 'react';
import styled from 'styled-components'

const Styledh3 = styled.h3`
    height: calc(100vh - 546px);
    margin: 150px auto 0;
`;

const NotFound = () => {
    return (
        <Styledh3>No films found</Styledh3>
    );
};

export default NotFound;