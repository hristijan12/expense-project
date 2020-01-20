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
            '',
            {
                'method': 'POST',
                'content-type': 'application/json',
                'body': JSON.stringify(data)
            }
        ). then(res => {
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
        break;
        case REGISTER_FAILED:
            return {...state, registerLoading: false, registerFailed: true};
        break;
        case REGISTER_LOADING:
            return {...state, registerLoading: true, registerFailed: false};
        break;
        default: 
            return state;
        break;
    }
}