// constants
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

// initial state

const initialState = {
    loginData: {},
    loginLoading: false,
    loginFailed: false,
    userSigned: false
};

// thunk action
export const loginUser = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch(loginUserLoading());
        fetch(
            'http://localhost:8001/api/v1/auth/login',
            {
                'method': 'POST',
                'body': JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                    
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('jwt', JSON.stringify(data));
            console.log(data)
            dispatch(loginUserSuccess(data));
            dispatch(userLogged(data.signed))
        })  
        .catch(err => {
            dispatch(loginUserFailed());
            dispatch(userLogged(false))
        });
    }
}

// actions
export const loginUserLoading = () => {
    return {
        type: LOGIN_LOADING
    }
}

export const loginUserSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginUserFailed = () => {
    return {
        type: LOGIN_FAILED
    }
}

export const userLogged = (bool) => {
    console.log(bool)
    return {
        type: LOGIN_USER_SUCCESS,
        payload: bool
    }
}


// reducer
export const loginReducer = (state = initialState, action) => {
    console.log(state)  
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, loginLoading: false, loginFailed: false};
        
        case LOGIN_FAILED:
            return {...state, loginLoading: false, loginFailed: true};
        
        case LOGIN_LOADING:
            return {...state, loginLoading: true, loginFailed: false};
        case LOGIN_USER_SUCCESS: 
        console.log(action.payload)
        return {
            ...state, userSigned: action.payload
        }
        default: 
            return state;
        
    }
}