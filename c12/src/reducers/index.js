import { combineReducers } from "redux";

import CommentReducer from "./CommentReducer";
import UsersReducer from "./UsersReducer";

export default combineReducers({
    CommentReducer,
    UsersReducer
});