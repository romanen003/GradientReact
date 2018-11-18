import React, { Component, createRef} from 'react';
import {bool, string, func} from 'prop-types';
import './button.css';


export class Button extends Component {
    static propTypes ={
        disabled: bool,
        label: string,
        onClick: func,
    };

    button = createRef();

    handleClick = () => {
        this.props.onClick();
        this.button.current.blur();
    };

    render () {
        const {
            disabled,
            label
        } = this.props;

        return (
            <button
                type='button'
                className='button'
                disabled={disabled}
                onClick={this.handleClick}
                ref={this.button}
            >
                {label}
            </button>
        );
    };
}