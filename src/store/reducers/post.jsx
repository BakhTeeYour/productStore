import {
    POST_REQUEST, POST_SUCCESS, POST_FAIL
} from "../actions";

export const initialState = {
    post: {},
    loading: false,
    error: null,
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUEST :
            return reducePostRequest(state, action);
        case POST_SUCCESS :
            return reducePostSuccess(state, action);
        case POST_FAIL :
            return reducePostFail(state, action);
        default:
            return state;
    }
};

const reducePostRequest = (state) => {
    return {
        ...state, loading: true, error: null,
    };
};

const reducePostSuccess = (state, action) => {
    return {
        ...state, post: {...action.payload.item}, loading: false, error: null,
    };
};
const reducePostFail = (state, action) => {
    return {
        ...state, loading: false, error: action.payload.error,
    };
};




