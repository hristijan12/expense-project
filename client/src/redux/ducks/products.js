// constants
const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
const PRODUCT_FAILED = "PRODUCT_FAILED";
const PRODUCT_LOADING = "PRODUCT_LOADING";


// initial state
const initialState = {
    productData: [],
    productLoading: false,
    productFailed: false
};

// thunk action
export const addProduct = (data) => {
    return (dispatch) => {
        dispatch(addProductLoading());
        fetch(
            'http://localhost:8000/api/v1/products/', 
            {
                'method': 'POST',
                'body': JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            dispatch(addProductSuccess(data));
        })
        .catch(err => {
            dispatch(addProductFailed())
        })
    }
}

//actions
export const addProductLoading = () => {
    return {
        type: PRODUCT_LOADING
    }
}

export const addProductSuccess = (data) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: data
    }
}

export const addProductFailed = () => {
    return {
        type: PRODUCT_FAILED
    }
}

// reducer
export const addProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_SUCCESS:
            return {...state, productLoading: false, productFailed: false};
        
        case PRODUCT_FAILED:
            return {...state, productLoading: false, productFailed: true};
        
        case PRODUCT_LOADING:
            return {...state, productLoading: true, productFailed: false};
       
        default: 
            return state;
        
    }
}