import {createStore} from "redux"
import productReducers from "./Reducers/productReducers"
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(productReducers, composeWithDevTools());

export default store;