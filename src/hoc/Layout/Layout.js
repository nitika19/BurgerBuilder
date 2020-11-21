import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandle = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandle = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        } )
    }
 
    render() {
        return (
            <Auxiliary>
                <Toolbar drawToggleClicked={this.sideDrawerToggleHandle}/>
                <SideDrawer 
                    open = {this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandle}
                    />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
 }

export default Layout;