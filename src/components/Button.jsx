import React from 'react';
import './Button.css';

function Button({ children, backgroundColor, textColor, action }) {
    const buttonStyle = {
        'backgroundColor': backgroundColor,
        'color': textColor,
        'boxShadow': `0 4px 16px 0 ${backgroundColor}`,
    }

    return (
        <button className="btn" style={buttonStyle} onClick={action}>
            {children}
        </button>
    );
}

export default Button;
