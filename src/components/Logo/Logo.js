import React from 'react';

import appLogo from '../../assets/images/logoOficial.png';

import classes from './Logo.css';

const logo = (props) => {
    return (
         <div className={classes.Logo}>
            <img src={appLogo} alt="Rusia 2018"/>
        </div>
    )
};

export default logo