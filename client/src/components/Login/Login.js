import React from 'react';
import {connect} from 'react-redux';

import {loginUser} from '../../redux/ducks/login'
import {Link} from 'react-router-dom'
import './shared.css'


class LoginCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        
	};


    onLoginClick = () => {
		this.props.loginUser(this.state);
	}

    render() {
        return(
        <React.Fragment>
            <div id="login">
                <div className="box-container" id="login2">
                <  form>
                <p className="input-container">
                    <label className="text-field-input" name='email' onChange={this.handleChange}>E-mail</label>
                    <input type="text" className="text-field"/>

                </p>
                <p className="input-container">
                    <label className="text-field-input" name='password' onChange={this.handleChange}>Password</label>
                    <input type="password" className="text-field"/>
                </p>
                <button type="button" className="primary-button" onClick={this.onLoginClick}>Sign in</button>


                </form>
                </div>
            </div>
            <div className="TextDiv">
                <p>Or if you don`t have an account, <Link to='/register'>Register.</Link></p>
            </div>
        </React.Fragment>
    )
}

}

const mapStateToProps = (state) => {
	return {
		loginLoading: state.loginLoading,
		loginFailed: state.loginFailed
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (data) => {
			return dispatch(loginUser(data))
		}
	}
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginCom);
export default Login
