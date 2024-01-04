import { combineReducers } from "redux";

import IceCreamReducer from "./iceCream/IceCreamReducer";
import CakeReducer from "./cake/CakeReducer";


const rootReducer = combineReducers({
    cake:CakeReducer,
    iceCream:IceCreamReducer

})

export default rootReducer