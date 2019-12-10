import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class CriteriaSearch extends Component {

    handleClick(e) {
        e.preventDefault();
        e.target.className = 'btn btn-danger';
        e.target.nextSibling ? e.target.nextSibling.className = 'btn btn-secondary'
                             : e.target.previousSibling.className = 'btn btn-secondary';
    }

    render() {
        return (
            <Fragment>
                <p>{this.props.buttonNames.kind} by</p>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="danger" onClick={this.handleClick}>{this.props.buttonNames.left}</Button>
                    <Button variant="secondary" onClick={this.handleClick}>{this.props.buttonNames.right}</Button> 
                </ButtonGroup>
            </Fragment>
        )
    }
}

export default CriteriaSearch
