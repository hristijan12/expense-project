// const EDIT_PRODUCT = "EDIT_PRODUCT"
// const EDIT_PRODUCT_CLICKED = "EDIT_PRODUCT_CLICKED"
// const TABLE_UPDATED = "TABLE_UPDATED"

// const initialState = {
//     productToEdit: '',
//     editProductClicked: '',
//     tableUpdated: false,
// };

// export const editProducts = (data) => {
//     console.log(data);
//     return (dispatch) => {
//         dispatch(tableUpdated(!this.state.tableUpdated));
//         fetch(
//             'http://localhost:8000/api/v1/products/', 
//             {
//                 name: this.state.name,
//                 description: this.state.description,
//                 type: this.state.type,
//                 date: this.state.date,
//                 price: this.state.price,
//             },
//             {
//                 'method': 'PUT',
//                 'body': JSON.stringify(data),
//                 headers: {
                    
//                     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//                 }
//             }
//         )
//         .then(res => res)
//         .catch(err => console.log(err))

//     }
// }

// //actions
// export const editProduct = (product, editProductClicked) => {
//     return {
//         type: EDIT_PRODUCT,
//         product,
//         editProductClicked
//     }
// }
// export const editProductClicked = (editProductClicked) => {
//     return {
//         type: EDIT_PRODUCT_CLICKED,
//         editProductClicked
//     }
// }
// export const tableUpdated = (tableUpdated) => {
//     return {
//         type: TABLE_UPDATED,
//         tableUpdated
//     }
// }


// //reducer
// export const editProductReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "EDIT_PRODUCT": {
//             return { ...state, productToEdit: action.product }
//         }
//         case "EDIT_PRODUCT_CLICKED": {
//             return { ...state, editProductClicked: action.editProductClicked }
//         }
//         case "TABLE_UPDATED": {
//             return { ...state, tableUpdated: action.tableUpdated }
//         }     
//         default: 
//             return state;
        
//     }
// }