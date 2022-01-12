import React from 'react';

const Button = ({onClick,classname,buttonText}) =>{
    return(
        <button onClick={onClick} className={classname}>{buttonText}</button>
    )
}

export default Button;