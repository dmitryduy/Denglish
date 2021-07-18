const LOGIN = 'LOGIN';

const initialState = {
    email: null,
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {email: action.payload};
        default:
            return state;
    }
}

export const setAuth = email => {
    return {
        type: LOGIN,
        payload: email,
    }
}

export default authReducer;