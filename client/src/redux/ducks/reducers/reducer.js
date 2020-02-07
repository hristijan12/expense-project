
const initState = {
    expensesClicked: false,
   
}

export function reducer(state = initState, action){
    switch (action.type){
        case "EXPENSES_CLICKED": {
            return { ...state, expensesClicked: action.expensesClicked}
            }
            default:
                return state 
        }   
        
    }   