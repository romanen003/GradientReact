import React, { Component } from 'react';
import {bool, string, func, number, objectOf} from 'prop-types';
import {Button,Input} from "../../elements";
import './gradient.css';


export class Gradient extends Component {
    static propTypes ={
        disabledButton : bool,
        handleColorButton: func,
        onChange: func,
        maxLength: number,
        gradient: objectOf(string),
        firstRef: func,
        secondRef: func,
        showFirstError: bool,
        showSecondError: bool,
        errorMessage: string,
        buttonLabel: string
    };


    render () {
        const {
            disabledButton,
            handleColorButton,
            onChange,
            maxLength,
            gradient,
            firstRef,
            secondRef,
            showFirstError,
            showSecondError,
            errorMessage,
            buttonLabel
        } = this.props;
        const isTrueStyle = Object.keys(gradient).length === 0 ? null : gradient ;

        return (
            <div
                className='Gradient'
                style={isTrueStyle}
            >
                <div className='Gradient__content'>
                    <Input
                        onChange={onChange}
                        placeholder='Enter first color'
                        maxLength={maxLength}
                        withRef={firstRef}
                        showError={showFirstError}
                        errorMessage={errorMessage}
                    />
                    <Button
                        disabled={disabledButton}
                        onClick={handleColorButton}
                        label={buttonLabel}
                    />
                    <Input
                        onChange={onChange}
                        placeholder='Enter second color'
                        maxLength={maxLength}
                        withRef={secondRef}
                        showError={showSecondError}
                        errorMessage={errorMessage}
                    />
                </div>
            </div>
        );
    };
}