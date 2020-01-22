
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

export const addProduct = (data) => {
    return (dispatch) => {
        dispatch(addProductLoading());
        fetch(
            'http://localhost:8000/api/v1/products/', {mode: 'no-cors'},
            {
                'method': 'POST',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'body': JSON.stringify(data)
            }
        ).then(res => {
            dispatch(addProductSuccess(data));
        })
        .catch(err => {
            dispatch(addProductFailed())
        })
    }
}

//actions

export const addProductLoading = () => {
    return{
        type: PRODUCT_LOADING
    }
}

export const addProductSuccess = () => {
    return{
        type: PRODUCT_SUCCESS
    }
}

export const addProductFailed = () => {
    return{
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