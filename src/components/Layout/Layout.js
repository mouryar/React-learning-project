import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Classes from './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () =>{
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggelHandler = () => {
        this.setState((preState) => {
            return {
                    showSideDrawer : !preState.showSideDrawer
                }
        })
    }



    render() {
        return(
            <Aux>
                <Toolbar toggleSideDrawer={this.sideDrawerToggelHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
                <div className={Classes.container}>{this.props.children}</div>
            </Aux>
        );
    }
}

export default Layout;