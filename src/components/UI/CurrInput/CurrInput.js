import React from 'react';
import classes from './CurrInput.css';

const currInput = (props) => {
    
    return (
            <input  className={classes.CurrInput} 
                    {...props}></input>
    )
};

export default currInput;