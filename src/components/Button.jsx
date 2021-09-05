import React from 'react';
import './Button.css';

function Button({ children, backgroundColor, textColor, action }) {
    const buttonStyle = {
        'backgroundColor': backgroundColor,
        'color': textColor,
    }

    return (
        <button style={buttonStyle} onClick={action}>
            {children}
        </button>
    );
}

export default Button;
