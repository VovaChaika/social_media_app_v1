import {applyMiddleware, combineReducers,legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;