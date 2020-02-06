import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../Products/Products.css'





//products
class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
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
                        <select name="sort" id="sort">
                            <option>First Purchase</option>
                            <option>Last Purchase</option>
                            <option>Highest Price</option>
                            <option>Lowest Price</option>
                        </select>            
                    </label>
                </div>        
        
            </div>    
            <this.props.table />
            <Link to='/newproduct'><button className="newproduct-button">NEW PRODUCT</button></Link>
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