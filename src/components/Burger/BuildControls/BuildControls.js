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
        {
            controls.map((control, index) => (<BuildControl 
                                        key={control.type} 
                                        label={control.label} 
                                        added = {() => props.addIngredient(control.type)}
                                        removed = {() => props.removeIngredient(control.type)}
                                        disabled = {props.disabled[control.type]}/>))
        }
    </div>
);

export default BuildControls;