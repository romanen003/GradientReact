import React, { Component } from 'react';
import {Gradient} from "./gradient";


export class GradientContainer extends Component {
    state = {
        isTrue: {
            1: false,
            2: false
        },
        value: {
            1: '',
            2: ''
        },
        gradient : ''
    };

    onIsCorrect = (event,value) => {
        const newDatas = {...this.state};
        const position = event.target.getAttribute('data-key');

        newDatas.isTrue[position] = value;
        newDatas.value[position] = event.target.value;
        this.setState({
            isTrue: newDatas.isTrue,
            value: newDatas.value
        });
    };

    handleColorButton = () => {
        const styleGradient = {
            background: `linear-gradient(45deg,${this.state.value[1]},${this.state.value[2]})`
        };

        this.setState({
            gradient: styleGradient
        });
    };

    render () {
        const {isTrue, gradient} = this.state;
        const isDisabled = isTrue[1] & isTrue[2];

        return (
            <Gradient
                gradient={gradient}
                disabledButton={!isDisabled}
                handleColorButton={this.handleColorButton}
                isCorrect={this.onIsCorrect}
            />
        );
    };
}