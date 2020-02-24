import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../Products/Products.css'
import { getProducts } from '../../redux/ducks/productActions'
import store from '../../redux/store'
import {editProductClicked} from '../../redux/ducks/productActions'
//products
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
            axios.get(`http://localhost:8000/api/v1/products/?sort=${this.state.filterOption}`,
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
        console.log(this.props)
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

const mapStateToProps = (state) => {
	return {
        products: state.data
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
//         getProducts: (data) => {
// 			return dispatch(getProducts(data))
// 		}
// 	}
// }


export default connect(mapStateToProps) (Products) ;