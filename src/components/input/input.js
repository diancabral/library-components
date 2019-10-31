import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './input.scss';


class Input extends React.Component {

  constructor(props) {

    super(props);
    this.state = {

      active: false,

    }

    this.textInput = React.createRef();
    this.activeInput = this.activeInput.bind(this);
    this.blurInput = this.blurInput.bind(this);

  }

  handleValue(value) {

    this.props.change(value);
    
  }

  activeInput() {

    this.textInput.current.focus();

    this.setState({active: true})

  }

  blurInput() {

    this.setState({active: false})

  }

  render() {

    return (
  
      <div className={`input`}>

        {this.props.label ? 
        
        <label className={

            `input__label ${this.state.active || this.props.value !== '' ? 'input__label--active' : ''} ${this.props.error ? 'input__label--error' : ''}`

          } 

          onClick={this.activeInput}>{this.props.label}
          
        </label> : null}
      
        <input 
        
        className={`input__field ${this.state.active ? 'input__field--active' : ''} ${this.props.error ? 'input__field--error' : ''}`}
        
        type={this.props.type}
        value={this.props.value}

        onChange={e => this.handleValue(e.target.value)}
        onClick={this.activeInput}
        onBlur={this.blurInput}

        ref={this.textInput}
        
        />

        <CSSTransition
          in={this.props.error ? true : false}
          timeout={300}
          classNames="alert"
          unmountOnExit
         
        >

        <span className="input__error">{this.props.error}</span>

        </CSSTransition>

      </div>

    )

  }

}

Input.propTypes = {

  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  change: PropTypes.func

};

Input.defaultProps = {
  
  type: 'text',
  error: ''

};

export default Input;