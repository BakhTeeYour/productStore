import {postsReducer} from "./posts";
import {postReducer} from "./post";
import {combineReducers} from "redux";
import {searchPostReducer} from "./search";
import {postCategoriesReducer} from "./categories";
import {reducePostSortByPriceReducer} from "./sortByPrice";

const appReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    search: searchPostReducer,
    categories: postCategoriesReducer,
    sortByPrice: reducePostSortByPriceReducer,
});

export const rootReducer = (state, action) => {
    switch (action.type) {
        default:
            return appReducer(state, action);
    }
};




