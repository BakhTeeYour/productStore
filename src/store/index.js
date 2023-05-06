import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {postReducer} from "./reducers/post";
import {postsReducer} from "./reducers/posts";

export const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
})

export const store = configureStore({
    reducer: rootReducer
})