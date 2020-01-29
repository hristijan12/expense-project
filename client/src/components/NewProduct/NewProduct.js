import React from 'react';
import {connect} from 'react-redux';



import {addProduct} from '../../redux/ducks/products';
import '../NewProduct/NewProduct.css';


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


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onProductClick = () => {
        this.props.addProduct(this.state)
    }
    
    render() {
        return(
        <React.Fragment>
            <div className="new-product-div">    
                <this.props.header />
                <h3>New Product</h3>
                 <div className="center-div">
                    <div className="left2-div">
                        <form>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Name</label>
                                <input type="text" className="text-field-product" name="name" onChange={this.handleChange}/>                              
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Description</label>
                                <input type="text" className="text-field-product" name="description" onChange={this.handleChange}/>                               
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Type</label>                                
                                <input type="text" className="text-field-product" name="type" onChange={this.handleChange}/>                             
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Purchase Date</label>                                   
                                <input type="date" className="text-field-product" name="date" onChange={this.handleChange}/>
                            </p>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Price</label>
                                <input type="text" className="text-field-product" name="price" onChange={this.handleChange}/>
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