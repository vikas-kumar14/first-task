import { combineReducers } from "redux";
import {Apilist, selectedApilist} from "./Apireducer";


const MainReducer = combineReducers({
    allProducts : Apilist,
    product : selectedApilist
});

export default MainReducer;
