import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import wordReducer from "./reducers/wordReducer";
import authReducer from "./reducers/authReducer";


const rootReducer = combineReducers({
        profile: profileReducer,
        words: wordReducer,
        auth: authReducer,
    }
);

export const store = createStore(rootReducer);