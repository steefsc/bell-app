import React from 'react';
import classes from './TopToolbar.css';
import Button from '../../UI/Button/Button';



const topToolbar = (props) => {
    return (
        <div className={classes.TopToolbar}>
              <div style={{height: "50%"}}>
                  <div className={classes.UserBadge}></div>
              </div>
              <div style={{height: "25%",width:"60%", justifyContent:"space-between"}}>
                  <div className={classes.ButtonsContent}>
                        <Button buttonType="ButtonHeader"></Button>
                        <Button buttonType="ButtonHeader"></Button>
                        <Button buttonType="ButtonHeader"></Button>
                        <Button buttonType="ButtonHeader"></Button>
                  </div>
              </div>
        </div>
    );
};

export default topToolbar;