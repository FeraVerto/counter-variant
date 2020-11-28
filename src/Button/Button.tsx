import React from 'react';

type ButtonPropsType = {
    onClick: () => void,
    title: string,
    disabled: boolean
}


function Button({onClick, disabled, title}: ButtonPropsType) {

    return (
        <button onClick={onClick}
                disabled={disabled}>{title}</button>
    );
}

export default Button;
