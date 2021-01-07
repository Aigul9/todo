import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }

    render() {
        return (
            <div className="item-add-form">
                <input placeholder="Enter new item"/>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onAdd("new item")}>Add item</button>
            </div>
        );
    }
}