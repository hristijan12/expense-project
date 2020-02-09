
const initState = {
    products: [],
    expensesClicked: false,
    totalPrice: '',

   
}

export function reducer(state = initState, action){
    switch (action.type){
        case "DELETE_PRODUCT": {
            let newProducts = state.products.filter(product => {
                return action.payload._id !== product._id
            })
            return { ...state, products: newProducts }
        }
        case "GET_TOTAL_PRICE": {
            return { ...state, totalPrice: action.payload }
        }

        case "EXPENSES_CLICKED": {
            return { ...state, expensesClicked: action.expensesClicked}
            }
            default:
                return state 
        }   
        
        
    }   