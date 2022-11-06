import { postReducer } from './reducers/postReducer';
import { createStore } from "redux";


export const store = createStore(postReducer)