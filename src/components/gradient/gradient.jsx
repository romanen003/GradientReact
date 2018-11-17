import React, { Component } from 'react';
import {Button,Input} from "../../elements";
import './gradient.css';


export class Gradient extends Component {

    render () {
        const {
            disabledButton,
            handleColorButton,
            onChange,
            isCorrect,
            gradient
        } = this.props;
        const isTrueStyle = Object.keys(gradient).length === 0 ? null : gradient ;

        return (
            <div
                className='Gradient'
                style={isTrueStyle}
            >
                <div className='Gradient__content'>
                    <Input
                        id = {1}
                        onChange={onChange}
                        placeholder='Enter first color'
                        isCorrect={isCorrect}
                    />
                    <Button
                        disabled={disabledButton}
                        onClick={handleColorButton}
                    />
                    <Input
                        id = {2}
                        onChange={onChange}
                        placeholder='Enter second color'
                        isCorrect={isCorrect}
                    />
                </div>
            </div>
        );
    };
}