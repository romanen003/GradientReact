import React, { Component, createRef } from 'react';
import {bool, string, func} from 'prop-types';
import {InputView} from "./input";

export class Input extends Component {
    static propTypes ={
        placeholder: string,
        type: string,
        onChange: func,
        errorMessage: string,
        showError: bool,
        withRef: func,
    };

    static defaultProps = {
        type: 'text',
        onChange: ()=>{},
        withRef: ()=>{}
    };

    state = {
        value: ''
    };

    input = createRef();

    handleRef = (ref) => {
        this.input = ref;
        this.props.withRef(ref);
    };

    onChange = (event) => {
        const {maxLength, onChange} = this.props;
        const {value} = event.target;

        if (value.length <= maxLength  ) {
            this.setState({ value });
            onChange(value, this.input);
        }
    };



    render () {
        const {
            placeholder,
            errorMessage,
            type,
            showError
        } = this.props;

        return (
            <InputView
                type={type}
                onChange={this.onChange}
                placeholder={placeholder}
                showError={showError}
                errorMessage={errorMessage}
                withRef={this.handleRef}
                value={this.state.value}
            />
        );
    };
}