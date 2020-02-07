import React from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import foo from '../../assets/images/images (1).jpg'
import './Header.css'
import { connect } from 'react-redux'

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            productsClicked: false,
            expensesClicked: true,
            active: true,
            name: this.props.userName   

        }
    }
    componentDidMount() {
        const user = localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name');
        this.setState({name: user})
    }

    signOut = () => {
        console.log("SIGN OUT CLICKED")
        localStorage.clear()
    }

    productsClicked = () => {
        this.setState({expensesClicked:false, productsClicked:true, active: !this.state.active})
    }

    expensesClicked = () => {
        this.setState({productsClicked: false, expensesClicked: true, active: this.state.active})
    }

    render() {
        return (
            <React.Fragment>
                 {!localStorage.getItem('jwt') ? <Redirect to='/' /> : null}
                <div className="nav">
                    <div className="left-div">
                        <Link to='/products'><button className={!this.state.active ? "active-nav-btn nav-btns" : "nav-btns"} onClick={this.productsClicked} id="products-button">PRODUCTS</button></Link>
                        <Link to='/expenses'><button className={this.state.active ? "active-nav-btn nav-btns" : "nav-btns"} onClick={this.expensesClicked} id="expenses-button">EXPENSES</button></Link>
                    </div>    
            
                    <div className="right-div">  
                        <img src={foo} alt="profile" className="user-photo"/><a href="/"className="user-name" onClick={this.signOut}>{this.state.name}</a>
                       
                    </div>  
                </div>     
    
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        userName: state.userName
    }
}

export default connect(mapStateToProps)(Header)


