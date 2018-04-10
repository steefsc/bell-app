import React, { Component } from 'react';
import classes from './Exchange.css';
import Button from '../../components/UI/Button/Button';
import CurrInput from '../../components/UI/CurrInput/CurrInput';
import axios from '../../axios-be';
import {Redirect} from 'react-router-dom';



class Exchange extends Component {
    state = {
        from: "USD",
        to: "EUR",
        fromValue: "",
        toValue: "",
        fromValueUI: "",
        toValueUI: "",
        callbackError: false
    }


    //Updateing the State
    onCurrInputKeyPress = (event, inputIden, locale) => {
        const value = event.target.value;
        if (event.charCode < 48 || event.charCode > 57) {
            if (event.charCode === 46) { //charcode for .
                if (value && value.indexOf('.') > 0) {
                    event.preventDefault();
                }
            } else {
                event.preventDefault();
            }
        }
    }

    currInputChangedInputHandler = (event, inputIden, locale) => {
        // console.log(event.target.value);
        let value = event.target.value;

        const stateCopy = {
            ...this.state
        }
        try {
            if (locale === 'en-US') {
                value = value.replace(/,/g, '');
            }
            const numberLocale = Number(value).toLocaleString(locale);
            if (value.lastIndexOf('.') === value.length - 1) {
                stateCopy[inputIden] = event.target.value;
            } else {
                stateCopy[inputIden] = numberLocale;
            }


        } catch (e) {
            stateCopy[inputIden] = "";
        }

        this.setState({
            ...stateCopy
        })


    }

    //Fetching data from the Back End using Axios
    onFetchDataHandler = () => {
        const stateCopy = {
            ...this.state
        }
        axios.post('rate', {
            from: 'USD',
            to: 'EUR'
        }).then((response) => {
            //console.log(response);
            let fromValueUI = null;
            if (response && response.data && response.data.rate) {
                if (stateCopy['from'] === 'USD') {
                    fromValueUI = stateCopy['fromValueUI'];
                    fromValueUI = fromValueUI.replace(/,/g, '');
                    fromValueUI = Number(fromValueUI);
                    stateCopy.toValueUI = fromValueUI * response.data.rate;
                    stateCopy.toValueUI = (stateCopy.toValueUI) ? stateCopy.toValueUI.toLocaleString("de-DE") : "0";
                    stateCopy['callbackError'] = false;
                    this.setState({
                        ...stateCopy
                    })
                }
            } else {
                stateCopy['callbackError'] = true;
            }
            
        }).catch(function (error) {
            //console.log(error);
        });
    }

    render() {
        const authenticated = sessionStorage.getItem("auth");
        let redirect = null;
        if (!authenticated) {
             redirect = <Redirect to='/'/>;
        }

        let callBackDiv = null;
        if (this.state.callbackError) {
            callBackDiv = <div className={classes.ErrorDiv}>There was an error with your call</div>;
        }
        return (
            <div className={classes.Exchange}>
                <div>
                    {redirect}
                    {callBackDiv}
                </div>
                <div className={classes.InputsContainer}>
                    <div className={classes.InputEnd}>
                        <CurrInput type='text' placeholder={this.state.from} value={this.state.fromValueUI} onChange={(event) => this.currInputChangedInputHandler(event, 'fromValueUI', 'en-US')}
                            onKeyPress={(event) => this.onCurrInputKeyPress(event, 'en-US')}></CurrInput>
                    </div>
                    <div className={classes.InputStart}>
                        <CurrInput type='text' placeholder={this.state.to} value={this.state.toValueUI} disabled></CurrInput>
                    </div>
                </div>
                <div className={classes.ButtonContainer}>
                    <Button buttonType='ButtonContent' clicked={this.onFetchDataHandler}>CALCULATE</Button>
                </div>
            </div>
        )
    }
};

export default Exchange;