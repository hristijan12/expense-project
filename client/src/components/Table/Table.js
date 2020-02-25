import React from 'react'

import './Table.css'
import TableRow from './TableRow';
import TableTools from './TableTools'
import Alert from '../Alert/Alert'

import store from '../../redux/store'
import axios from 'axios'
import { connect } from 'react-redux';
import { getProducts, deleteProduct, getTotalPrice, editProduct, editProductClicked, tableUpdated } from '../../redux/ducks/actions/productActions'


class Table extends React.Component{
    constructor(props){
        super(props)
        this.state = {  
            product: null,
            alertShow: false,
            editProductClicked: false
        };    
    }


    componentDidMount() {
        if (this.props.products){
            axios.get("http://localhost:8000/api/v1/products/?sort=date:desc",
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
            })
                .then(res => {
                    store.dispatch(getProducts(res.data));
                    let totalPrice = 0;
                        for (let i = 0; i < res.data.length; i++) {
                        totalPrice += parseInt(res.data[i].price)
                    }
                store.dispatch(getTotalPrice(totalPrice));
            })
                .catch(err => {
                    console.log(err);
            })         
       }
    }

      componentDidUpdate() {
        if (this.props.tableUpdated) {
                axios.get("http://localhost:8000/api/v1/products/?sort=date:desc",
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                        }
                    }
                )
                    .then(res => {
                        store.dispatch(getProducts(res.data));
                        store.dispatch(tableUpdated(false));
                    })
                    .catch(err => {
                        console.log(err);
                    })
        }
    }


    hideAlert = () => {
        this.setState({ alertShow: false })
    }
    editProduct = (product) => {
        const clicked = !this.state.editProductClicked
        store.dispatch(editProduct(product));
        store.dispatch(editProductClicked(clicked));

    }
    
      deleteProduct = (product, productID) => {
        this.setState({ alertShow: false })
        axios.delete(`http://localhost:8000/api/v1/products/${productID}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                store.dispatch(deleteProduct(product))
            })
            .catch(err => {
                console.log(err)
            })
    }



    deleteProductHandler = (product) => {
        this.setState({ product: product })
        this.setState({ alertShow: true })

    }
    

        render() {  
            let trs = null;
                if (this.props.products){
                trs = this.props.products.map((product, i) => {
                return (<TableRow key={product + i} name={product.name}
                    deleteProduct={() => this.deleteProductHandler(product)}
                    editProduct={() => this.editProduct(product)}
                    description={product.description}
                    type={product.type}
                    date={product.date}
                    price={product.price}
                    tableTools={TableTools}/>)
            })
        }
            let alert = null;
                if (this.state.alertShow) {
                alert = <Alert hide={this.hideAlert}
                    delete={() => this.deleteProduct(this.state.product, this.state.product._id)} />
            }


            return(
                <React.Fragment>
                    <div className="table-div">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Type</th>
                                    <th>Product Description</th>
                                    <th>Purchase Date</th>
                                    <th>Product Price</th>
                                    {!this.props.expensesClicked ? <th>Product Options</th> : null }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="empty-td"></td>
                                </tr>
                                {trs}
                            </tbody>
                        </table>    
                    </div>
                    {alert}
                </React.Fragment>
            )
        }
}

function mapStateToProps(state) {
    return {
        products: state.reducer.products,
        expensesClicked: state.reducer.expensesClicked,
        tableUpdated: state.reducer.tableUpdated
    }
}   

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => {
            dispatch(getProducts())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table)