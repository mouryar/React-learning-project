import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 1
        }
    }
    render(){
        return(
            <div>
                <div>Burger</div>
                <Burger ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default BurgerBuilder;