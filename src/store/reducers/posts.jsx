import {
    POSTS_REQUEST,
    POSTS_SUCCESS,
    POSTS_FAIL,
    POST_CATEGORIES_REQUEST,
    POST_CATEGORIES_SUCCESS,
    POST_CATEGORIES_FAIL,
    SEARCH_POST_REQUEST,
    SEARCH_POST_SUCCESS,
    SEARCH_POST_FAIL
} from "../actions";

export const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_REQUEST :
            return reducePostsRequest(state, action);
        case POSTS_SUCCESS :
            return reducePostsSuccess(state, action);
        case POSTS_FAIL :
            return reducePostsFail(state, action);
        case POST_CATEGORIES_REQUEST :
            return reducePostCategoriesRequest(state, action);
        case POST_CATEGORIES_SUCCESS :
            return reducePostCategoriesSuccess(state, action);
        case POST_CATEGORIES_FAIL :
            return reducePostCategoriesFail(state, action);
        case SEARCH_POST_REQUEST :
            return reduceSearchPostRequest(state, action);
        case SEARCH_POST_SUCCESS :
            return reduceSearchPostSuccess(state, action);
        case SEARCH_POST_FAIL :
            return reduceSearchPostFail(state, action);
        default:
            return state;
    }
};

const reducePostsRequest = (state) => {
    return {
        ...state, loading: true, error: null,
    };
};

const reducePostsSuccess = (state, action) => {
    return {
        ...state, posts: action.payload.items, loading: false, error: null,
    };
};
const reducePostsFail = (state, action) => {
    return {
        ...state, loading: false, error: action.payload.error,
    };
};

const reducePostCategoriesRequest = (state) => {
    return {
        ...state, loading: true, error: null,
    };
};

const reducePostCategoriesSuccess = (state, action) => {
    return {
        ...state, posts: action.payload.items, loading: false, error: null,
    };
};
const reducePostCategoriesFail = (state, action) => {
    return {
        ...state, loading: false, error: action.payload.error,
    };
};
const reduceSearchPostRequest = (state) => {
    return {
        ...state, loading: true, error: null,
    };
};

const reduceSearchPostSuccess = (state, action) => {
    return {
        ...state, posts: action.payload.items, loading: false, error: null,
    };
};
const reduceSearchPostFail = (state, action) => {
    return {
        ...state, loading: false, error: action.payload.error,
    };
};




