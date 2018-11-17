import React, { Component } from 'react';
import './input.css';
import {isValid} from '../../services/valid-hex';

export class Input extends Component {
    state = {
        isValid: false
    };

    onChange =(event) => {
         const isTrue = isValid(event.target.value);

         this.setState({
             isValid: isTrue
         });
        this.props.isCorrect(event, isTrue);
    };

    render () {
        const {
            placeholder,
            id,
            isCorrect
        } = this.props;
        const showError = !this.state.isValid;

        return (
            <div className='Input-component'>
                <input
                    className='Input-component__input'
                    type="text"
                    data-key={id}
                    onChange={this.onChange}
                    placeholder={placeholder}
                    isCorrect={isCorrect}
                />
                {showError ?
                    <div className='Input-component__tooltip'>
                        Enter true color
                    </div>
                :
                    null
                }
            </div>
        );
    };
}