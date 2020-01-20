import React from 'react';

import {Link} from 'react-router-dom'

import '../Products/Products.css'
import foo from '../../assets/images/images (1).jpg'

class Products extends React.Component{
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
                    <img src={foo} alt="profile" className="user-photo"/><a href="/#"className="user-name">Gal Gadot</a>
        
                </div>  
        </div>     
    
            
        <div>
    
        <div className="products">
            <div className="products-div">
                    <h3>Products</h3>
                    <label for="sort">Filter by:
                        <select name="sort" id="sort">
                            <option>Year</option>
                            <option>Highest Price</option>
                            <option>Lowest Price</option>
                            <option>Latest Purchases</option>
                        </select>            
                    </label>
            </div>        
        <div className="main-div">            
        <table className="table" >
            <thead>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
                <th>Product Options</th>
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
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                <td>Coca Cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td>
                    <a href="/#"><i className="far fa-edit"></i></a>
                    <a href="/#"><i className="far fa-trash-alt"></i></a>
                </td>
            </tr>
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>
                        <a href="/#"><i className="far fa-edit"></i></a>
                        <a href="/#"><i className="far fa-trash-alt"></i></a>
                    </td>
            </tr>
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>
                        <a href="/#"><i className="far fa-edit"></i></a>
                        <a href="/#"><i className="far fa-trash-alt"></i></a>
                    </td>
            </tr>
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>
                        <a href="/#"><i className="far fa-edit"></i></a>
                        <a href="/#"><i className="far fa-trash-alt"></i></a>
                    </td>
            </tr>    
            <tr className="body-tr">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td>
                        <a href="/#"><i className="far fa-edit"></i></a>
                        <a href="/#"><i className="far fa-trash-alt"></i></a>
                    </td>
            </tr>    
            </tbody>
        </table>
        </div>
    </div>    
    <Link to='/newproduct'><button className="newproduct-button">NEW PRODUCT</button></Link>
    <script src="https://kit.fontawesome.com/c449c1f62a.js"></script>
           </div>
            </React.Fragment>
        
        )
       
}
}

export default Products