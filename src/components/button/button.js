import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

class Button extends React.Component {

  constructor(props) {

    super(props);
    this.state = {}

  }

  handleClick(e) {

    e.preventDefault();
    this.props.click()

  }

  render() {

    return (
    
      <button 
      
      className={`button button--${this.props.color} ${this.props.fullWidth ? 'button--fullwidth': ''}`} 

      onClick={this.handleClick.bind(this)}
      
      >{this.props.label}</button>

    )

  }

}

Button.propTypes = {

  color: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  click: PropTypes.func

};

Button.defaultProps = {
  
  color: 'blue',
  label: 'Ok',
  fullWidth: false,

};

export default Button;