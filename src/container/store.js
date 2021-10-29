import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// create new store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
