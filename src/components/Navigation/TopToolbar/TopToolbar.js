import React from 'react';
import classes from './TopToolbar.css';
import Logo from '../../Logo/Logo';
import FaUser from 'react-icons/lib/md/face';



const topToolbar = (props) => {
    return (
        <div className={classes.TopToolbar}>
              <div style={{height: '48px'}}>
                <Logo/>
              </div>
              <div style={{color: "white", textAlign: "center", fontSize: "13px"}}>
                <div>
                    <FaUser size={30}/>
                </div>
                <div>
                    Steef
                </div>
              </div>
        </div>
    );
};

export default topToolbar;