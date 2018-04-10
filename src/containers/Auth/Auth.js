import React, { Component } from 'react';
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
    state = {
        userName: "",
        password: ""
    }
    render() {
        return (
           <div className={classes.Auth}>
               <form>
                   <div className={classes.DivRow}>
                        <div style={{textAlign:'right'}}>
                            <label>
                                    User
                            </label>
                       </div>
                       <div style={{textAlign:'left'}}>
                            <input type='text' placeholder='User Name'></input>
                       </div>
                   </div>
                   <div className={classes.DivRow}>
                       <div style={{textAlign:'right'}}> 
                            <label>
                                    Password
                            </label>
                       </div>
                       <div style={{textAlign:'left'}}> 
                            <input type='password'  placeholder='Password'></input>
                       </div>
                   </div>
                   <div>
                     <Button buttonType='ButtonContent'>LOGIN</Button>
                    </div>
               </form>
           </div>
        )
    }
};

export default Auth;