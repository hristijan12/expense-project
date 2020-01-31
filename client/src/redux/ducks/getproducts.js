// constants
const GETPRODUCTS_SUCCESS = "GETPRODUCTS_SUCCESS";
const GETPRODUCTS_FAILED = "GETPRODUCTS_FAILED";
const GETPRODUCTS_LOADING = "GETPRODUCTS_LOADING";

// initial state
const initialState = {
    productsData: [],
    productsLoading: false,
    productsFailed: false
};


// thunk action
export const getProducts = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch(getProductsLoading());
        fetch(
            'http://localhost:8000/api/v1/products/', 
            {
                'method': 'GET',
                'body': JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            dispatch(getProductsSuccess(data));
        })
        .catch(err => {
            dispatch(getProductsFailed())
        })
    }
}

//actions
export const getProductsLoading = () => {
    return {
        type: GETPRODUCTS_LOADING
    }
}

export const getProductsSuccess = (data) => {
    return {
        type: GETPRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsFailed = () => {
    return {
        type: GETPRODUCTS_FAILED
    }
}

// reducer
export const getProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GETPRODUCTS_SUCCESS:
            return {...state, productsLoading: false, productsFailed: false};
        
        case GETPRODUCTS_FAILED:
            return {...state, productsLoading: false, productsFailed: true};
        
        case GETPRODUCTS_LOADING:
            return {...state, productsLoading: true, productsFailed: false};
       
        default: 
            return state;
        
    }
}