import React from 'react'

import {Link} from 'react-router-dom'

const TableTools = (props) =>{ 
    return (
        <td>
            <Link to="/edit-product">
                <button id="edit-button"><i className="far fa-edit"></i></button>
            </Link>
                <button id="delete-button"><i className="far fa-trash-alt"></i></button>
        </td>
    )
}

export default TableTools