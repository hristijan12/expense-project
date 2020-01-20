import React from 'react';

import '../../assets/css/shared.css'
import '../Register/Register.css'

class Register extends React.Component{
    constructor(props){
        super(props)
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

render(){
    return(
        <React.Fragment>
        <div id="register">
                <div className="box-container" id="register-box">
                <form>
                    <p className="input-container">
                            <label className="text-field-input" for="">First Name</label>
                            <input type="text" className="text-field"/>
        
                    </p>
                    <p className="input-container">
                            <label className="text-field-input" for="">Last Name</label>
                            <input type="text" className="text-field"/>
        
                    </p>
                    <p className="input-container">
                            <label className="text-field-input" for="">Email</label>
                            <input type="text" className="text-field"/>
        
                    </p>
                    <p className="input-container">
                            <label className="text-field-input" for="">Date of Birth</label>
                            <input type="text" className="text-field"/>
        
                    </p>
                    <p className="input-container">
                            <label className="text-field-input" for="">Telephone</label>
                            <input type="text" className="text-field"/>
        
                    </p>
                    <p className="input-container">
                            <label className="text-field-input" for="">Country</label>
                            <input type="text" className="text-field"/>
        
                    </p>
                    <p className="input-container">
                            <label className="text-field-input" for="">Password</label>
                            <input type="password" className="text-field"/>
        
                    </p>
                    <button type="button" className="primary-button">Register</button>
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

export default Register

