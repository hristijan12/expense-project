import React from 'react'

import {Link} from 'react-router-dom'

import './Table.css'

const TableTools = (props) =>{ 
    return (
        <td>
            <Link to="/edit-product">
                <button id="edit-button" onClick={props.editProduct}><i className="far fa-edit"></i></button>
            </Link>
                <button id="delete-button" onClick={props.deleteProduct}><i className="far fa-trash-alt"></i></button>
        </td>
        
    )
}

export default TableTools