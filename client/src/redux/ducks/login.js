// // constants
// const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// const LOGIN_FAILED = "LOGIN_FAILED";
// const LOGIN_LOADING = "LOGIN_LOADING";
// const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
// const SAVE_USER_NAME = "SAVE_USER_NAME"
// // initial state

// const initialState = {
//     loginData: {},
//     loginLoading: false,
//     loginFailed: false,
//     userSigned: false,
//     userName: ''
// };

// // thunk action
// export const loginUser = (data) => {
//     console.log(data);
//     return (dispatch) => {
//         dispatch(loginUserLoading());
//         fetch(
//             'http://localhost:8001/api/v1/auth/login',
//             {
//                 'method': 'POST',
//                 'body': JSON.stringify(data),
//                 headers: {
//                     'Content-Type': 'application/json'
                    
//                 }
//             }
//         )
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.jwt)
//             localStorage.setItem('jwt', data.jwt)
//             localStorage.setItem('first_name', data.first_name);
//             console.log(data.first_name)
//             localStorage.setItem('last_name', data.last_name);
//             const name = data.first_name + ' ' + data.last_name
//             console.log(name)
//             dispatch(saveUserName(name))
//             // localStorage.setItem('jwt', JSON.stringify(data));
//             console.log(data)
//             dispatch(loginUserSuccess(data));
//             dispatch(userLogged(data.signed))
//         })  
//         .catch(err => {
//             dispatch(loginUserFailed());
//             dispatch(userLogged(false))
//         });
//     }
// }

// // actions
// export const loginUserLoading = () => {
//     console.log("Loginuserloading")
//     return {
//         type: LOGIN_LOADING
//     }
// }

// export const loginUserSuccess = (data) => {
//     return {
//         type: LOGIN_SUCCESS,
//         payload: data
//     }
// }

// export const loginUserFailed = () => {
//     return {
//         type: LOGIN_FAILED
//     }
// }

// export const userLogged = (bool) => {
//     console.log(bool)
//     return {
//         type: LOGIN_USER_SUCCESS,
//         payload: bool
//     }
// }

// export const saveUserName = (name) => {
//     return {
//         type: SAVE_USER_NAME,
//         userName: name
//     }
// }


// // reducer
// export const loginReducer = (state = initialState, action) => {
//     console.log(state)  
//     switch(action.type) {
//         case LOGIN_SUCCESS:
//             return {...state, loginLoading: false, loginFailed: false};
        
//         case LOGIN_FAILED:
//             return {...state, loginLoading: false, loginFailed: true};
        
//         case LOGIN_LOADING:
//             return {...state, loginLoading: true, loginFailed: false};
//         case LOGIN_USER_SUCCESS: 
//         console.log(action.payload)
//         return {
//             ...state, userSigned: action.payload
//         }
//         case SAVE_USER_NAME: 
//             return { ...state, userName: action.userName }
    
        
//         default: 
//             return state;
        
//     }
// }