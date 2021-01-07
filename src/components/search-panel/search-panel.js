import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchText: ""
    }

    onSearchChange = (e) => {
        const searchText = e.target.value;
        this.setState({
            searchText: e.target.value
        });
        this.props.onSearchChange(searchText);
    }

    render() {
        return (
            <input
                placeholder="search"
                className="form-control search-input"
                value={this.state.searchText}
                onChange={this.onSearchChange}/>
        );
    }  
};