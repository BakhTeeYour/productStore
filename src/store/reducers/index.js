import {postsReducer} from "./posts";
import {postReducer} from "./post";
import {combineReducers} from "redux";
import {searchPostReducer} from "./search";
import {postCategoriesReducer} from "./categories";

const appReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    search: searchPostReducer,
    categories: postCategoriesReducer,
});

export const rootReducer = (state, action) => {
    switch (action.type) {
        default:
            return appReducer(state, action);
    }
};




