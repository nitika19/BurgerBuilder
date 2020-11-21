import React ,{Component} from 'react';

import Modal from '../../components/UI/Modal/Model';
import Aux from '../Auxiliary/auxiliary';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component{

        state = {
            error: null
        }

        componentWillMount(){
            this.reqInterceptos =axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptos = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
                
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptos);
            axios.interceptors.response.eject(this.resInterceptos);
        }

        errorConfirmedHandler = () => {
            this.setState({error : null});
        }

        render(){
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
                
            )
        }
    }
}

export default withErrorHandler;