import { createStore, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;