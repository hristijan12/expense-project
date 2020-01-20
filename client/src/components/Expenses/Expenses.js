import React from 'react';

import {Link} from 'react-router-dom'
import '../Expenses/Expenses.css'
import avatar from '../../assets/images/images (1).jpg'

class Expenses extends React.Component{
    constructor(props){
        super(props)
        this.state = {
      
        };
    }

    render(){
        return(
            <React.Fragment>
    <div className="nav">
        <div className="left-div">
            <Link to='/products'><button className="buttons" id="products-button">PRODUCTS</button></Link>
            <Link to='/expenses'><button className="buttons" id="expenses-button">EXPENSES</button></Link>
        </div>    
            
        <div className="right-div">  
            <img src={avatar} alt="profile" className="user-photo"/><a href="/#" className="user-name">Gal Gadot</a>
        
        </div>  
    </div>     
            
    
        <div className="products">
            <div className="products-div">
                    <h3>Expenses</h3>
            </div>        
        
        <div className="tabs-div">
            <a href="/#"><button id="month-button">Monthly</button></a>
            <a href="/#"><button id="year-button">Yearly</button></a>

            <div className="option-select-div">
                <label for="month-select">Choose Month</label>
                    <select>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>


            </div>
        </div>

        <div className="main-div">            
        <table className="table" >
            <thead>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
                <th>----------------</th>
            </thead>
            <tr>
                <td id="empty-td"></td>
            </tr>
            <tbody>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
                
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
                
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
                
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
               
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td></td>
            </tr>
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                   <td></td>
            </tr>
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td></td>
            </tr>
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td></td>
            </tr>    
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                   <td></td>
            </tr>    
            </tbody>
        </table>
        </div>
    </div>    

    <div className="transparent-div">
        <p>Total spent: 1205den.</p>
    </div>



            </React.Fragment>
        )
    }
}

export default Expenses