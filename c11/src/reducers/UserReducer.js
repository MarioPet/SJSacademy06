const initialState = {
    firstName: ""
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_FIRST_NAME" :
            return {
                ...state,
                firstName: action.payload
            }
        default: return state;
    }
}

export default UserReducer;