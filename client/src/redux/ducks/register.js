// constants
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILED = "REGISTER_FAILED";
const REGISTER_LOADING = "REGISTER_LOADING";

// initial state

const initialState = {
    registerData: {},
    registerLoading: false,
    registerFailed: false
};

// thunk action
export const registerUser = (data) => {
    return (dispatch) => {
        dispatch(registerUserLoading());
        fetch(
            '/api/v1/auth/register', {mode: 'no-cors'},
            {
                'method': 'POST',
                'Content-Type': 'application/json',
                'body': JSON.stringify(data)
            }
        ).then(res => {
            // dispatch(registerUserSuccess(res));
            dispatch(registerUserSuccess(data));
        })  
        .catch(err => {
            dispatch(registerUserFailed());
        });
    }
}

// actions
export const registerUserLoading = () => {
    return {
        type: REGISTER_LOADING
    }
}

export const registerUserSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export const registerUserFailed = () => {
    return {
        type: REGISTER_FAILED
    }
}

// reducer
export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, registerLoading: false, registerFailed: false};
        
        case REGISTER_FAILED:
            return {...state, registerLoading: false, registerFailed: true};
        
        case REGISTER_LOADING:
            return {...state, registerLoading: true, registerFailed: false};
       
        default: 
            return state;
        
    }
}