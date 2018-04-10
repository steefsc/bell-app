import React, {Component} from 'react';
import classes from './Exchange.css';

class Exchange extends Component {
   render() {
       return (
        <div className={classes.Exchange}>
            <div>
                
            </div>
            <div className={classes.InputsContainer}>
                <div className={classes.InputEnd}>
                    <input className={classes.ExchangeInput} type="text" placeholder="USD"></input>
                </div>
                <div className={classes.InputStart}>
                    <input className={classes.ExchangeInput} type="text" placeholder="EUR"></input>
                </div>
            </div>
            <div className={classes.ButtonContainer}>
                <div className={classes.Button}>
                    <font style={{color: "#eee"}}>CALCULATE</font>
                </div>
            </div>
        </div>
       )
   }
};

export default Exchange;