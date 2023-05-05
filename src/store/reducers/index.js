import {postsReducer} from "./posts";
import {postReducer} from "./post";
import {combineReducers} from "redux";

const appReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
});

export const rootReducer = (state, action) => {
    switch (action.type) {
        default:
            return appReducer(state, action);
    }
};




