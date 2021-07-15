import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ color, text }) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    btnColor: 'blue' 
}

Button.propTypes ={
    Button
}



export default Button
