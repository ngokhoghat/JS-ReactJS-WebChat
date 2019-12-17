import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../redux/actions/login';
interface Iprop {
    login: any
}
interface Istate {

}

class Google extends Component<Iprop, Istate> {


    responseGoogle = (response: any) => {
        this.props.login(response.profileObj)
    }
    render() {
        return (
            <GoogleLogin
                clientId="542888842456-42cgb7rjm61ptik5lmso138co2hoaem2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        aut: state.loginPageReducer
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        login
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Google)