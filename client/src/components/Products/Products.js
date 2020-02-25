import React from 'react';
import '../Products/Products.css'

import { Link } from 'react-router-dom';
import axios from 'axios'
import store from '../../redux/store'

import { getProducts } from '../../redux/ducks/actions/productActions'
import { editProductClicked } from '../../redux/ducks/actions/productActions'

class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            filterOption: null
        }
    }

    componentDidUpdate() {
        if(this.state.filterOption !== null) {
            axios.get(`https://young-bastion-52459.herokuapp.com/api/v1/products/?sort=${this.state.filterOption}`,
                {
                    headers: {
                        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
                    }
                }
            )
            .then(res => {
                store.dispatch(getProducts(res.data));

            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    
    filterHandler = (event) => {
        this.setState({ filterOption: event.target.value })

    }

    newProductHandler = () => {
        this.setState({clicked: true})
        store.dispatch(editProductClicked(this.state.clicked))
    }

    render(){
        return(
            <React.Fragment>
            <this.props.header/>
            <div className="products">
                <div className="products-div">
                    <h3>Products</h3>
                    <label htmlor="sort">Filter by:
                        <select name="sort" id="sort" onChange={this.filterHandler}>
                            <option value="date:desc">Last Purchase</option>
                            <option value="date:asc">First Purchase</option>
                            <option value="price:desc">Highest Price</option>
                            <option value="price:asc">Lowest Price</option>
                        </select>            
                    </label>
                </div>        
        
            </div>    
            <this.props.table />
            <Link to='/newproduct'><button className="newproduct-button" onClick={this.newProductHandler}>NEW PRODUCT</button></Link>
            <script src="https://kit.fontawesome.com/c449c1f62a.js"></script>
            </React.Fragment>
        
        )
       
    }
}


export default Products
