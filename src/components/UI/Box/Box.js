import React from 'react';
import classes from './Box.css';
//import mascotaImg from '../../../assets/images/ball-logo.png';
//import FlagIcon from '../../UI/FlagIcon/FlagIcon';
import FaEdit from 'react-icons/lib/ti/edit';
import ThumbUp from 'react-icons/lib/md/thumb-up';
import ThumbDown from 'react-icons/lib/md/thumb-down';
//import {NavLink} from 'react-router-dom';


const Box = (props) => {
    let editButton = props.showEdit ? (
                    <div className={classes.EditButton}>
                        <FaEdit size={24}/>
                    </div>
                ) : null;

    let leftIcon = props.boxIcon ? (
                    <div className={classes.HeaderImage}>
                            <img src={props.boxIcon} alt={props.boxIconAlt}/>                        
                    </div>
        ) : null;            
    return (
        <div className={classes.Box}>
            <header className={classes.Header}>
                <div className={classes.HeaderBar}>
                    {leftIcon}
                    <div className={classes.HeaderContent}>
                        <h1>
                            {props.boxTitle}
                        </h1>
                        <p>
                            {props.boxSubtitle}
                        </p>
                    </div>
                    
                </div>
                {editButton}
            </header>
            <div className={classes.Content}>
                
            </div>
            {props.children}
            <footer className={classes.Footer}>
                <div style={{width: "50px", color: "#1976D2", cursor: "pointer"}}>
                    <ThumbUp size={18}/>&nbsp;
                    <span style={{fontSize: "12px"}}>0</span>
                </div>
                <div style={{color: "#FF5252" , cursor: "pointer"}}>
                    <ThumbDown size={18}/>&nbsp;
                    <span style={{fontSize: "12px"}}>0</span>
                </div>
            </footer>
        </div>
    )
};

export default Box;