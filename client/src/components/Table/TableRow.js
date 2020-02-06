import React from 'react'

import { connect } from 'react-redux'

const TableRow = (props) => {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.type}</td>
            <td>{props.date.toString().slice(0, 10)}</td>
            <td>{props.price}</td>
            {!props.expensesClicked ?
                <props.tableTools editProduct={props.editProduct} deleteProduct={props.deleteProduct}/> : null}
        </tr>
    )
}

function mapStateToProps(state) {
    return ({
        expensesClicked : state.expensesClicked
    })
}


export default connect (mapStateToProps)(TableRow);