import React, { Component } from 'react';
import {bool, string, func} from 'prop-types';
import './input.css';

export class InputView extends Component {
    static propTypes ={
        placeholder: string,
        type: string,
        onChange: func,
        errorMessage: string,
        showError: bool,
        withRef: func,
        value: string
    };


    render () {
        const {
            placeholder,
            onChange,
            type,
            errorMessage,
            showError,
            withRef,
            value
        } = this.props;

        return (
            <div className='Input-component'>
                <input
                    className='Input-component__input'
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    ref={withRef}
                    value={value}
                />
                {showError &&
                    <div className='Input-component__tooltip'>
                        {errorMessage}
                    </div>
                }
            </div>
        );
    };
}