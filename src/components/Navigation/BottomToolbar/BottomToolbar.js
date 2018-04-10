import React from 'react';
import classes from './BottomToolbar.css';
import NavigationItems from './NavigationItems/NavigationItems';

const bottomToolbar = (props) => {
    return (
        <nav className={classes.BottomToolbar}>
            <NavigationItems></NavigationItems>
        </nav>
    )
};

export default bottomToolbar;   