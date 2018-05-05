import React from 'react';
import Aux from '../../hoc/Aux'
import Classes from './Layout.css'

const layout = (props) => {
    return(
        <Aux>
            <div>ToolBar SideBar Backdrop</div>
            <div className={Classes.container}>{props.children}</div>
        </Aux>
    );
}

export default layout;