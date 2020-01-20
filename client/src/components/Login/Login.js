import React from 'react';

import {Link} from 'react-router-dom'
import './shared.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            submitted: false
        };
    }

render() {
    return(
        <React.Fragment>
            <div id="login">
            <div className="box-container" id="login2">
            <form>
                <p className="input-container">
                    <label className="text-field-input" htmlFor="">E-mail</label>
                    <input type="text" className="text-field"/>

                </p>
                <p className="input-container">
                    <label className="text-field-input" htmlFor="">Password</label>
                    <input type="password" className="text-field"/>
                </p>
                <button type="button" className="primary-button">Sign in</button>


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

export default Login
