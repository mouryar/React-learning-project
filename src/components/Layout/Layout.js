import React from 'react';
import Aux from '../../hoc/Aux'
import Classes from './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return(
        <Aux>

            <div><Toolbar/></div>
            <div className={Classes.container}>{props.children}</div>
        </Aux>
    );
}

export default layout;