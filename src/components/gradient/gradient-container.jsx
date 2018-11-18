import React, { Component } from 'react';
import {string, number} from 'prop-types';
import {Gradient} from "./gradient";
import {isValid} from "../../services/valid-hex";


export class GradientContainer extends Component {
    static propTypes ={
        errorMessage: string,
        maxLength: number,
        buttonLabel: string
    };

    static defaultProps = {
        errorMessage: 'Enter true color, without #',
        maxLength: 6,
        buttonLabel: 'Change color'
    };

    state = {
        error: {
            first: false,
            second: false
        },
        value: {
            first: '',
            second: ''
        },
        disabled : {
            first: true,
            second: true
        },
        gradient : {}
    };

    inputs = {
        first: null,
        second: null
    };

    handleFirstRef = (ref) => this.inputs.first = ref;

    handleSecondRef = (ref) => this.inputs.second = ref;

    handleChangeInput = (valueInput, ref) => {
        const {error, value, disabled} = this.state;
        let activeInput = ref === this.inputs.first ? 'first' : 'second';


        if (isValid(valueInput)){
            this.setState({
                error: {
                    ...error,
                    [activeInput]: false
                },
                value: {
                    ...value,
                    [activeInput]:valueInput
                },
                disabled: {
                    ...disabled,
                    [activeInput]: false
                }
            });
            return;
        }
        this.setState({
            error: {
                ...error,
                [activeInput]: true
            },
            disabled: {
                ...disabled,
                [activeInput]: true
            }
        });
    };


    handleColorButton = () => {
        const styleGradient = {
            background: `linear-gradient(45deg,#${this.state.value.first},#${this.state.value.second})`
        };

        this.setState({
            gradient: styleGradient
        });
    };

    render () {
        const {error, gradient, disabled} = this.state;
        const isDisabled = disabled.first || disabled.second ;

        return (
            <Gradient
                gradient={gradient}
                disabledButton={isDisabled}
                handleColorButton={this.handleColorButton}
                maxLength={this.props.maxLength}
                firstRef={this.handleFirstRef}
                secondRef={this.handleSecondRef}
                onChange={this.handleChangeInput}
                showFirstError={error.first}
                showSecondError={error.second}
                errorMessage={this.props.errorMessage}
                buttonLabel={this.props.buttonLabel}
            />
        );
    };
}