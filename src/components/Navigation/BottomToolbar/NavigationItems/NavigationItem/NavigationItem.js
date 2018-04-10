import React from 'react';
import classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                to={{pathname: props.pathname}} 
                exact
                activeClassName={classes.active}>
                <div>
                    {props.icon}
                </div>
                <div>
                    {props.children}
                </div>
            </NavLink>
        </li>
    )
};

export default navigationItem;