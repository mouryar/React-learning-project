import React from 'react';
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(iKey => {
        return <li key={iKey}>
                <span style={{textTransform: 'capitalize'}}>{iKey}:</span> {props.ingredients[iKey]}
            </li>
        })
    return(
        <Aux>
          <h3>Order Summary</h3>
          <p>A delicious burger with following ingredient:</p>
          <ul>
            {ingredientSummary}
          </ul>
        </Aux>
    );
};
export default OrderSummary;