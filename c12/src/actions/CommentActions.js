import axios from "axios";

export const FetchCommentsStart = (comments) => {
    return {
        type: "FETCH_COMMENTS",
        payload: comments
    }
}

export const FetchCommentsError = (err) => {
    return {
        type: "FETCH_COMMENTS_ERROR",
        payload: err
    }
}

export const FetchComments = () => {
    return dispatch => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => dispatch(FetchCommentsStart(res.data)))
            .catch(err => dispatch(FetchCommentsError(err)));
    }
}