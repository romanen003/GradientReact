import React, { Component } from 'react';
import './button.css';


export class Button extends Component {
    render () {
        const {
            disabled,
            onClick
        } = this.props;

        return (
            <button
                type='button'
                className='button'
                disabled={disabled}
                onClick={onClick}
            >
                Change background
            </button>
        );
    };
}