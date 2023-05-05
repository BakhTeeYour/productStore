import {
    POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAIL} from "../actions";

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
        ...state, posts: action.payload.items.products, loading: false, error: null,
    };
};
const reducePostsFail = (state, action) => {
    return {
        ...state, loading: false, error: action.payload.error,
    };
};




