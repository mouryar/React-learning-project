import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Aux'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGERIENTS_PRICE_MAP = {
            meat: 0.5,
            salad: 0.9,
            cheese: 1.5,
            bacon: 0.7
    }
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        puchasable: false,
        purchasing: false
    }
    addIngredientHandler = (type) => {
        const typeCount = this.state.ingredients[type];
        const updateTypeCount = typeCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updateTypeCount;

        const updatedTotalPrice = INGERIENTS_PRICE_MAP[type] + this.state.totalPrice;

        this.setState({
            totalPrice: updatedTotalPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (updatedIngredients) => {
       
        const sum = Object.keys(updatedIngredients)
                    .map(key => updatedIngredients[key])
                    .reduce((sum, el)=> sum = sum + el,0)
        this.setState({
            puchasable: sum > 0
        })
    }

    showOrderSummaryHandler = () => {
        this.setState({purchasing: true})
    }

    purchseCancelHandler = () =>{
        this.setState({
            purchasing: false
        })
    }

    removeIngredientHandler = (type)=>{
        const typeCount = this.state.ingredients[type];
        if(typeCount === 0){
            return;
        }
        const updateTypeCount = typeCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updateTypeCount;

        const updatedTotalPrice = this.state.totalPrice - INGERIENTS_PRICE_MAP[type];

        this.setState({
            totalPrice: updatedTotalPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }
    render(){
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal purchasing={this.state.purchasing} modelClosed={this.purchseCancelHandler}>
                    <OrderSummary
                    ingredients={this.state.ingredients}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disableInfo}
                    totalPrice={this.state.totalPrice}
                    puchasable={this.state.puchasable}
                    showOrderSummary = {this.showOrderSummaryHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;