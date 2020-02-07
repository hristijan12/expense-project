import React from 'react'

import './Table.css'
import TableRow from './TableRow';
import TableTools from './TableTools'
import store from '../../redux/store'
import axios from 'axios'
import { connect } from 'react-redux';
import { getProducts } from '../../redux/ducks/getproducts'


class Table extends React.Component{
    constructor(props){
        super(props)
        this.state = {  
            products: []
        };    
    }


    componentDidMount() {
        axios.get("http://localhost:8000/api/v1/products/",
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(res => {
            console.log(res)
            console.log("entered then in get")
            store.dispatch(getProducts(res.data))
           
        })
        .catch(err => {
            console.log(err);
        })         
      }
    


        render() {
            const trs = this.props.products.map((product, i) => {
                return (<TableRow key={product + i} name={product.name}
                    description={product.description}
                    type={product.type}
                    date={product.date}
                    price={product.price}
                    tableTools={TableTools}/>)
            })


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
                
                </React.Fragment>
            )
        }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.getProductsReducer.productsData,
        expensesClicked: state.expensesClicked
    }
}   

export default connect(mapStateToProps)(Table)