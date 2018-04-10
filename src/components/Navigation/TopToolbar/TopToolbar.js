import React from 'react';
import classes from './TopToolbar.css';




const topToolbar = (props) => {
    return (
        <div className={classes.TopToolbar}>
              <div style={{height: "50%"}}>
                  <div className={classes.UserBadge}></div>
              </div>
              <div style={{height: "50%",width:"60%", justifyContent:"space-between"}}>
                  <div className={classes.ButtonsContent}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                  </div>
              </div>
        </div>
    );
};

export default topToolbar;