const initialState = JSON.parse(localStorage.getItem('profile')) || {
    levelName: 'newbie',
    currentPoints: 0,
    totalPoints: 100
}

const profileReducer = (state=initialState, action) => {
return state;
}

export default profileReducer;