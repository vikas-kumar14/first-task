
// export const addApi = (apilist)=>{
//     var apiinfo = {
//         type : "apidata",
//         apilist : apilist
//     }
//     return apiinfo;
// }


import storeApi from '../apis/storeApi'

export const fetchProducts = ()=>{
    return async (dispatch) =>{
        const response = await storeApi.get('/productCopy')
        dispatch({type : "fetchdata", payload: response.data});
    }
};

export const fetchProduct = (id)=>{
    return async (dispatch) =>{
        const response = await storeApi.get(`/productCopy/${id}`)
        dispatch({type: "selecteddata", payload: response.data});
    }
};

// export const setProduct = (products)=>{
//     return{
//         type : "setdata",
//         payload : products
//     }
// }

// export const selectedProduct = (products)=>{
//     return{
//         type : "selecteddata",
//         payload : products
//     }
// }

export const removeSelectedProduct = (products)=>{
    return{
        type : "removeselecteddata"
    }
}