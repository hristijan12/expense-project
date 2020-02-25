const initState = {
    products: [],
    expensesClicked: false,
    totalPrice: '',
    editProductClicked: '',
    productToEdit: '',
    tableUpdated: false,
    userName: '', 
}

export function reducer(state = initState, action){
    switch (action.type){
        case "GET_PRODUCTS": {
            return {
                ...state, products: action.payload
            }
        }
        case "DELETE_PRODUCT": {
            let newProducts = state.products.filter(product => {
                return action.payload._id !== product._id
            })
            return { ...state, products: newProducts }
        }
        case "GET_TOTAL_PRICE": {
            return { ...state, totalPrice: action.payload }
        }
        case "EDIT_PRODUCT": {
            return { ...state, productToEdit: action.product }
        }

        case "EDIT_PRODUCT_CLICKED": {
            return { ...state, editProductClicked: action.editProductClicked }
        }
        case "TABLE_UPDATED": {
            return { ...state, tableUpdated: action.tableUpdated }
        }
        case "SAVE_USER_NAME": {
            return { ...state, userName: action.userName }
        }
        case "EXPENSES_CLICKED": {
            return { ...state, expensesClicked: action.expensesClicked}
        }

            default:
                return state 
        }   
        
        
    }   