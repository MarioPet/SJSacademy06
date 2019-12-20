const initialState = {
    comments: [],
    error: ""
}

const CommentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_COMMENTS" :
            return {
                ...state,
                comments: action.payload
            }
        case "FETCH_COMMENTS_ERROR" :
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

export default CommentReducer;