
import React from 'react'
import './Alert.css'

const alert = (props) => {
    return (
    <div id="alert-div" className='delete'>
        <div id="alert-container">
            <div id="alert-text-container">
                <h1>Delete Product</h1>
                <p>You are about to delete this product. Are you sure you wish to continue ?</p>
            </div>
            <div id="alert-buttons">
                <button className="alert-btn" id="cancel-alert-btn" onClick={props.hide}
                >CANCEL</button>
                <button className="alert-btn" id="delete-alert-btn" onClick={props.delete} 
                >DELETE</button>
            </div>
        </div>
    </div>
    )
}

export default alert;