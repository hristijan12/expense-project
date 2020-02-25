import React from 'react';
import '../NewProduct/NewProduct.css';

import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import store from '../../redux/store'
import axios from 'axios'

import {addProduct} from '../../redux/ducks/products';
import {tableUpdated} from '../../redux/ducks/actions/productActions';



class NewProductCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.editProductClicked ? this.props.productToEdit.name : '',
            description: this.props.editProductClicked ? this.props.productToEdit.description : '',
            type: this.props.editProductClicked ? this.props.productToEdit.type : '',
            date: this.props.editProductClicked ? this.props.productToEdit.date : '',
            price: this.props.editProductClicked ? this.props.productToEdit.price : '',
            tableUpdated: false
        };
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    onProductClick = () => {
        this.props.addProduct(this.state)
    }

    editProduct = (event) => {
        if (this.state.name === '' || this.state.type === '' ||
            this.state.description === '' || this.state.date === '' || this.state.price === '') {
            alert('Please fill the fields!')
            event.preventDefault()
        } else {
            store.dispatch(tableUpdated(!this.state.tableUpdated))
            axios.put(`https://young-bastion-52459.herokuapp.com/api/v1/products/${this.props.productToEdit._id}`,
                {
                    name: this.state.name,
                    description: this.state.description,
                    type: this.state.type,
                    date: this.state.date,
                    price: this.state.price,
                    _modified: new Date()
                }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    
    render() {
        return(
        <React.Fragment>
            <div className="new-product-div">    
                <this.props.header />
                {this.props.editProductClicked ? <h3 id="new-products-h3">Edit Product</h3> : <h3 id="new-products-h3">New Product</h3>}
                 <div className="center-div">
                    <div className="left2-div">
                        <form>
                            <p className="input-container-product">
                                <label className="text-field-input-product" >Product Name</label>
                                <input defaultValue={this.props.editProductClicked ? this.props.productToEdit.name : ''}
                                type="text" className="text-field-product" name="name" onChange={this.handleChange}/>                              
                            </p>
                            <p className="input-container-product">
                                <label defaultValue={this.props.editProductClicked ? this.props.productToEdit.description : ''}
                                className="text-field-input-product" >Product Description</label>
                                <input type="text" className="text-field-product" name="description" onChange={this.handleChange}/>                               
                            </p>
                            <p className="input-container-product">
                                <label defaultValue={this.props.editProductClicked ? this.props.productToEdit.type : ''}
                                className="text-field-input-product" >Product Type</label>                                
                                <input type="text" className="text-field-product" name="type" onChange={this.handleChange}/>                             
                            </p>
                            <p className="input-container-product">
                                <label defaultValue={this.props.editProductClicked ? this.props.productToEdit.date.toString().slice(0, 10) : ''}
                                className="text-field-input-product" >Purchase Date</label>                                   
                                <input type="date" className="text-field-product" name="date" onChange={this.handleChange}/>
                            </p>
                            <p className="input-container-product">
                                <label defaultValue={this.props.editProductClicked ? Number(this.props.productToEdit.price) : ''}
                                className="text-field-input-product" >Product Price</label>
                                <input type="text" className="text-field-product" name="price" onChange={this.handleChange}/>
                            </p>
                            <Link to='/products'>
                            {this.props.editProductClicked ?
                            <button type="button" className="primary-button-product" onClick={this.editProduct}> Edit Product</button> :
                            <button type="button" className="primary-button-product" onClick={this.onProductClick}>Create product</button>}    
                            </Link>
                        </form>

                    </div>
                    <div className="right2-div">
                        <span><i id="plus-icon" className="fas fa-plus-circle"></i></span>
                        {this.props.editProductClicked ? <p id='product-text'>You are editing a  product</p> : <p id='product-text'>You are creating a new product</p>}
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
        productFailed: state.productFailed,
        productToEdit: state.reducer.productToEdit,
        editProductClicked: state.reducer.editProductClicked,
        tableUpdated: state.reducer.tableUpdated
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