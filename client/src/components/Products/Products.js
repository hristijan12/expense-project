import React from 'react';

import {Link} from 'react-router-dom'

import '../Products/Products.css'
import {getProductsFailed, getProductsSuccess, getProductsLoading} from '../../redux/ducks/getproducts';
import getProductsAction from '../../redux/ducks/getproducts'


//products
class Products extends React.Component{
    constructor(props){
        super(props)

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        
    }

    componentWillMount() {
        const {getProducts} = this.props;
        getProducts();
    }

    shouldComponentRender() {
        const {getproductsLoading} = this.props;
        if(this.getproductsLoading === false) return false;
        // more tests
        return true;
    }



    render(){
        const {getproductsData, getproductsFailed, getproductsLoading} = this.props;
        if(!this.shouldComponentRender()) 
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

const mapStateToProps = state => ({
    productsFailed: getProductsError(state),
    productsData: getProducts(state),
    productsLoading: getProductsLoading(state)
})


const mapDispatchToProps = dispatch => bindActionCreators({
    getProducts: getProductsAction
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (Products) ;