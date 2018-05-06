import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.purchasing} clicked={props.modelClosed}/>
        <div 
        className={classes.Modal}
        style={{transform: props.purchasing ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.purchasing ? '1':'0'
                }}>
            {props.children}
        </div>
    </Aux>
    
);

export default Modal;