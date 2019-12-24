const initialState = {
    users: [],
	usersMap: undefined,
}

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USERS" :
            return {
                ...state,
                users: action.payload.users,
				usersMap: action.payload.usersMap

            }
        default: return state;
    }
}

export default UsersReducer;