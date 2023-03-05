import {createStore} from "redux"
import productReducers from "./Reducers/productReducers"

const store = createStore(productReducers);

export default store;