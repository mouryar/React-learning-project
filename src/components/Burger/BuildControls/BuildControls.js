import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
        {label: 'Salad', type:'salad'},
        {label: 'Cheese', type:'cheese'},
        {label: 'Meat', type:'meat'},
        {label: 'Bacon', type:'bacon'}
    ]
const BuildControls = (props) => (
    
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {
            controls.map((control, index) => (<BuildControl 
                                        key={control.type} 
                                        label={control.label} 
                                        added = {() => props.addIngredient(control.type)}
                                        removed = {() => props.removeIngredient(control.type)}
                                        disabled = {props.disabled[control.type]}/>))
        }
        <button 
            className={classes.OrderButton} 
            disabled={!props.puchasable} 
            onClick={props.showOrderSummary}>ORDER NOW</button>
    </div>
);

export default BuildControls;