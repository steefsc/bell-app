import React, { Component } from 'react';
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import axios from '../../axios-be';
import {Redirect} from 'react-router-dom';

class Auth extends Component {
    state = {
        userName: "",
        password: "",
        authenticated: false
    }

    onLoginHandler = () => {
        const copyState = {
            ...this.state
        }
        let url = 'login?username=:USERNAME&password=:PASSWORD';
        url = url.replace(':USERNAME', copyState['userName']).replace(':PASSWORD', copyState['password'])
        axios.post(url, {
            username: copyState['userName'],
            password: copyState['password'],
        }).then((response) => {
            // console.log(response);
            sessionStorage.setItem("auth", true);
            sessionStorage.setItem("userName", copyState['userName'])
            copyState.authenticated = true;
            this.setState ({
                ...copyState,
            })
        }).catch((error) => {

        })
    }




    onChangeInputHandler = (event, input) => {
        const copyState = {
            ...this.state
        }
        copyState[input] = event.target.value;

        this.setState({
            ...copyState
        });

    }
    render() {
        let redirect = null;
        if (this.state.authenticated) {
            redirect = <Redirect to='/app/home'/>;
        }
        return (
            <div className={classes.Auth}>
                {redirect}
                <div className={classes.DivRow}>
                    <div style={{ textAlign: 'right' }}>
                        <label>
                            User
                            </label>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <input type='text' placeholder='User Name' value={this.state.userName} onChange={(event) => this.onChangeInputHandler(event, 'userName')}></input>
                    </div>
                </div>
                <div className={classes.DivRow}>
                    <div style={{ textAlign: 'right' }}>
                        <label>
                            Password
                            </label>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <input type='password' placeholder='Password' value={this.state.password} onChange={(event) => this.onChangeInputHandler(event, 'password')}></input>
                    </div>
                </div>
                <div>
                    <Button buttonType='ButtonContent' clicked={this.onLoginHandler}>LOGIN</Button>

                </div>
            </div>
        )
    }
};

export default Auth;