import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

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
          <p><strong>Total Price: {props.totalPrice.toFixed(2)}$</strong></p>
          <p>Continue to checkout ?</p>
          <Button btnType="Danger" clicked={props.orderCanceled}>CANCEL</Button>
          <Button btnType="Success" clicked={props.oderFinished}>CONTINUE</Button>
        </Aux>
    );
};
export default OrderSummary;