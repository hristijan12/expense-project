import React from 'react';
import {Link} from 'react-router-dom';
import './shared.css';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import store from '../../redux/store'
import { saveUserName } from '../../redux/ducks/actions/userAction'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            userSigned: false,
            error: null
        };
    }



    componentDidMount() {
        localStorage.clear()
    }

    logIn = (event) => {
        localStorage.clear()
        event.preventDefault()
        axios.post('https://young-bastion-52459.herokuapp.com/api/v1/auth/login',
        {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem('jwt', res.data.jwt);
            localStorage.setItem('first_name', res.data.first_name);
            localStorage.setItem('last_name', res.data.last_name);
            const name = res.data.first_name + ' ' + res.data.last_name
            store.dispatch(saveUserName(name))
            this.setState({userSigned: true})
        })
        .catch(err => {
            this.setState({ error: true})
        })
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        
    };
    
    redirectToMain = () => {
        if (this.state.userSigned) {
            return <Redirect to='/products' />
        }
    }

    render() {
        return(
        <React.Fragment>
            {this.redirectToMain()}
            <div id="login">
                <div className="box-container" id="login2">
                <form >
                <p className="input-container">
                    <label className="text-field-input">
                        Email
                    <input type="text" className="text-field" name="email" onChange={this.handleChange}/>
                    </label>

                </p>
                <p className="input-container">
                    <label className="text-field-input">
                        Password
                    <input type="password" className="text-field" name="password" onChange={this.handleChange}/>
                    </label>
                </p>
                <button type="button" className="primary-button" onClick={this.logIn}>Sign in</button>


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
