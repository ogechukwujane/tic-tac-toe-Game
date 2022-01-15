import React from 'react';

const Button = ({onClick,classname,buttonText,disable}) =>{
    return(
        <button disabled={disable}onClick={onClick} className={classname}>{buttonText}</button>
    )
}

export default Button;