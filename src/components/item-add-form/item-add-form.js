import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ""
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ""
        });
    };

    render() {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Enter new item"
                    className="form-control"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    required/>
                <button
                    className="btn btn-outline-secondary"
                    disabled={!this.state.label}>Add item</button>
            </form>
        );
    }
}