import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {addProduct} from '../../redux/ducks/products';
import '../NewProduct/NewProduct.css';
import foo from '../../assets/images/images (1).jpg';

class NewProductCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            type: '',
            date: '',
            price: ''
        };
    }


    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    
    onProductClick = () => {
        this.props.addProduct(this.state)
    }
    render() {
        return(
        <React.Fragment>
            <div className="new-product-div">    
                <div className="nav">
                    <div className="left-div">
                        <Link to='/products'><button className="buttons" id="products-button">PRODUCTS</button></Link>
                        <Link to='/expenses'><button className="buttons" id="expenses-button">EXPENSES</button></Link>
                    </div>
                    <div className="right-div">
                        <img src={foo} alt="slika" className="user-photo"/><a href="/#"className="user-name">Gal Gadot</a>
                    </div>
                </div>    
                <h3>New Product</h3>
                 <div className="center-div">
                    <div className="left2-div">
                        <form>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Name</label>
                                <input type="text" className="text-field-product"/>
        
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Description</label>
                                <input type="text" className="text-field-product"/>
        
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Type</label>
                                <input type="text" className="text-field-product"/>
        
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Purchase Date</label>
                                <input type="date" className="text-field-product"/>
        
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Price</label>
                                <input type="text" className="text-field-product"/>
        
                            </p>

                            <button type="button" className="primary-button-product" onClick={this.onProductClick}>Create product</button>    

                        </form>

                    </div>
                    <div className="right2-div">
                        <p id='product-text'>You are creating a new product</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
	return {
		productLoading: state.productLoading,
		productFailed: state.productFailed
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProduct: (data) => {
			return dispatch(addProduct(data))
		}
	}
};

const NewProduct= connect(mapStateToProps, mapDispatchToProps)(NewProductCom);


export default NewProduct