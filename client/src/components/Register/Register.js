import React from 'react';
import {connect} from 'react-redux';

import {registerUser} from '../../redux/ducks/register';
import '../../assets/css/shared.css'
import '../Register/Register.css'

class RegisterCom extends React.Component{
    constructor(props){
		super(props);
		
        this.state = {
            first_name: '',
            last_name: '',
            email:'',
            date_of_birth:'',
            telephone:'',
            country:'',
            password:'',
            submitted: false
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
	};
	
	onRegisterClick = () => {
		this.props.registerUser(this.state);
	}

	render(){
		return(
			<React.Fragment>
				<div id="register">
					<div className="box-container" id="register-box">
						<form>
							<p className="input-container">
								<label className="text-field-input">
									First Name
									<input type="text" className="text-field" onChange={this.handleChange}/>
								</label>
							</p>
							<p className="input-container">
								<label className="text-field-input">
									Last Name
									<input type="text" className="text-field" onChange={this.handleChange}/>
								</label>
							</p>
							<p className="input-container">
								<label className="text-field-input">
									Email
									<input type="text" className="text-field" onChange={this.handleChange}/>	
								</label>
							</p>
							<p className="input-container">
								<label className="text-field-input">
									Date of Birth
									<input type="text" className="text-field" onChange={this.handleChange}/>	
								</label>
							</p>
							<p className="input-container">
								<label className="text-field-input">
									Telephone
									<input type="text" className="text-field" onChange={this.handleChange}/>	
								</label>
							</p>
							<p className="input-container">
								<label className="text-field-input">
									Country
									<input type="text" className="text-field" onChange={this.handleChange}/>	
								</label>
							</p>
							<p className="input-container">
								<label className="text-field-input">
									Password
									<input type="password" className="text-field" onChange={this.handleChange}/>	
								</label>
							</p>
							<button type="button" className="primary-button" onClick={this.onRegisterClick}>Register</button>
						</form>
					</div>
					<div className="TextDiv" id="register-text">
						<p>Or if you already have an account, <a href='/'>Sign in</a>. </p>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		registerLoading: state.registerLoading,
		registerFailed: state.registerFailed
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		registerUser: (data) => {
			return dispatch(registerUser(data))
		}
	}
};

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterCom);

export default Register;

