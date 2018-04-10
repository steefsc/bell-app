import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import MdHome from 'react-icons/lib/md/home';
import MdHelp from 'react-icons/lib/md/help';
import MdResultados from 'react-icons/lib/md/view-list';
import GoPartidos from 'react-icons/lib/ti/calendar';





const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}> 
            <NavigationItem link="/" icon={<MdHome size={24}/>} pathname="/app">Inicio</NavigationItem>
            <NavigationItem link="/" icon={<GoPartidos size={24}/>} pathname="/app/partidos">Partidos</NavigationItem>
            <NavigationItem link="/" icon={<MdResultados size={24}/>} pathname="/app/resultados">Resultados</NavigationItem>
            <NavigationItem link="/" icon={<MdHelp size={24}/>} pathname="/app/ayuda">Ayuda</NavigationItem>
        </ul>
    )
};

export default navigationItems;