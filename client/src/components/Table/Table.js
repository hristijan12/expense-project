import React from 'react'

import './Table.css'
import TabelRow from './TableRow';
import TableTools from './TableTools'

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        
        };    
    }
        render(){
            let TableRow = null;
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
                                    <th>Product Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="empty-td"></td>
                                </tr>
                                {TableRow}
                            </tbody>
                        </table>
                    </div>
                </React.Fragment>
            )
        }
}

export default Table