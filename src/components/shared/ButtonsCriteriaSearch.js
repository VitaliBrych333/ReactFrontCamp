import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSearch, setSort } from '../../redux/actions/criteriaActions';

class CriteriaSearch extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        e.target.className = 'btn btn-danger';
        e.target.nextSibling ? e.target.nextSibling.className = 'btn btn-secondary'
                             : e.target.previousSibling.className = 'btn btn-secondary';

        if ((e.target.innerHTML === 'Title') || (e.target.innerHTML === 'Genre')) {
            this.props.dispatch(setSearch(e.target.innerHTML));

        } else if ((e.target.innerHTML === 'Release date') || (e.target.innerHTML === 'Rating')) {
            this.props.dispatch(setSort(e.target.innerHTML));
        }

        console.log('fffffffff', this.props)
    }

    render() {
        return (
            <Fragment>
                <p>{this.props.buttonNames.kind} by</p>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="danger" onClick={this.handleClick.bind(this)}>{this.props.buttonNames.left}</Button>
                    <Button variant="secondary" onClick={this.handleClick.bind(this)}>{this.props.buttonNames.right}</Button>
                </ButtonGroup>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.criteriaReducer.search,
        sort: state.criteriaReducer.sort
    };
}

export default connect(mapStateToProps)(CriteriaSearch);
