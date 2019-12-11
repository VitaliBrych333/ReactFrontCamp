import React, { Component } from 'react';
import { Badge, Card } from 'react-bootstrap';
import styled from 'styled-components'

const StyledCartTitle = styled(Card.Title)`
    display: flex;
    justify-content: space-between;

    a {
        color: #212;
    }
`;

const StyledCard = styled(Card)`
    width: 230px;
    border: none;
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    .card-body {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .card-text button {
        background: none;
        border: none;
        color: #212529;
        padding: 0;
    }

    img {
        width: 230px;
        height: 300px;
    }

    .card-text, .card-text p {
        margin: 0;
        padding: 0;
    }
`; 

class Item extends Component {

    render() {
        return (
            <StyledCard>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                <Card.Body>
                    <StyledCartTitle>
                        <a href="#">Film title</a>
                        <Badge variant="secondary">2019</Badge>
                    </StyledCartTitle>
                    <Card.Text><button variant="secondary">Action</button></Card.Text>
                </Card.Body>
            </StyledCard>
        )
    }
}

export default Item
