import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';


const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component{

        state = { 
            error: null
        }
        errorConfirmedHandler = () => {

        }
        componentWillMount () {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error : null})
                return request;
            });

            this.responseInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);
        }
        
        render(){
            return (
            <Aux>
                <Modal 
                    purchasing={this.state.error !== null}
                    modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>);
        };
    }
} 

export default withErrorHandler;