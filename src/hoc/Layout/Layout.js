import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css'
import BottomToolbar from '../../components/Navigation/BottomToolbar/BottomToolbar';
import TopToolbar from '../../components/Navigation/TopToolbar/TopToolbar';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <TopToolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <BottomToolbar/>
            </Aux>
        )
    }
};

export default Layout;