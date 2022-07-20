const initialState = {
    products : []
}

export const Apilist = (state= initialState, {type, payload})=>{
    switch(type){
        // case "setdata":
        //     return {...state, products: payload};
        case "fetchdata":
            return {...state, products: payload};
        default:
            return state;
    }
};

export const selectedApilist = (state= {}, {type, payload})=>{
    switch(type){
        case "selecteddata":
            return {...state, ...payload};
        case "removeselecteddata":
            return {};
        default:
            return state;
    }
};
















// const Apilist = (state=[], action)=>{
//     var datalist = Object.assign([], state);

//     if(action.type == "apidata"){
//         datalist = action.apilist;
//     }
//     return datalist;
// }

// export default Apilist;