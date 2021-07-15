import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import wordReducer from "./reducers/wordReducer";


const rootReducer = combineReducers({
        profile: profileReducer,
        words: wordReducer
    }
);

export const store = createStore(rootReducer);