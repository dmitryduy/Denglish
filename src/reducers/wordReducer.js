const initialState = JSON.parse(localStorage.getItem('words')) || {};

const wordReducer = (state=initialState, action) => {
    return state;
}

export default wordReducer;