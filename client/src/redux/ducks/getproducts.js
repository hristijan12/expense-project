// // constants
// const GETPRODUCTS_SUCCESS = "GETPRODUCTS_SUCCESS";
// const GETPRODUCTS_FAILED = "GETPRODUCTS_FAILED";
// const GETPRODUCTS_LOADING = "GETPRODUCTS_LOADING";

// // initial state
// const initialState = {
//     productsData: [],
//     productsLoading: false,
//     productsFailed: false
// };

// export const getProducts = (data) => {
//     console.log(data)
//       return {
//           type: GETPRODUCTS_SUCCESS,
//           payload: data
//       }
//     }
    

//thunk action
// export const getProducts = (data) => {
//    return (dispatch) => {
//         dispatch(getProductsLoading());
//         fetch(
//             'http://localhost:8000/api/v1/products/', 
//             {
//                 'method': 'GET',
//                 'body': data,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//                 }
//             }
//         )
//         .then((res) => {
//             console.log("ENTERED FIRST THEN");
//             console.log(res)
//             dispatch(getProductsSuccess(res))
//         } )
//         // .then((data) => {
//         //     console.log("ENTERED SECOND THEN")
//         //     console.log(data)
//         //     ;
//         // })
//         .catch((err) => {
//             console.log("ERRR")
//             console.log(err)
//             dispatch(getProductsFailed())
//         })
//     }
// }

//actions
// export const getProductsLoading = () => {
//     return {
//         type: GETPRODUCTS_LOADING
//     }
// }

// export const getProductsSuccess = (data) => {
//     console.log(data)
//     return {
//         type: GETPRODUCTS_SUCCESS,
//         payload: data
//     }
// }

// export const getProductsFailed = () => {
//     return {
//         type: GETPRODUCTS_FAILED
//     }
// }

// // reducer
// export const getProductsReducer = (state = initialState, action) => {
//     console.log(state)
//     switch(action.type) {
//         case GETPRODUCTS_SUCCESS:
//             console.log(action.payload)
//             return {...state, productsLoading: false, productsFailed: false, productsData: action.payload};
        
//         case GETPRODUCTS_FAILED:
//             return {...state, productsLoading: false, productsFailed: true};
        
//         case GETPRODUCTS_LOADING:
//             return {...state, productsLoading: true, productsFailed: false};
       
//         default: 
//             return state;
        
//     }
// }



