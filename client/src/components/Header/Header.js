import React from 'react';

import { Link } from 'react-router-dom';
import foo from '../../assets/images/images (1).jpg'
import './Header.css'


class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    signOut = () => {
        console.log("SIGN OUT CLICKED")
        localStorage.clear()
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <div className="left-div">
                        <Link to='/products'><button className="header-buttons" id="products-button">PRODUCTS</button></Link>
                        <Link to='/expenses'><button className="header-buttons" id="expenses-button">EXPENSES</button></Link>
                    </div>    
            
                    <div className="right-div">  
                        <img src={foo} alt="profile" className="user-photo"/><a href="/"className="user-name" onClick={this.signOut}>Gal Gadot</a>
        
                    </div>  
                </div>     
    
            </React.Fragment>
        )
    }
}

export default Header


