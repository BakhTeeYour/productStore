import {
    SEARCH_POST_REQUEST, SEARCH_POST_SUCCESS, SEARCH_POST_FAIL
} from "../actions";

export const initialState = {
    searchItem: [],
    success: false,
    loading: false,
    error: null,
};

export const searchPostReducer = (state = initialState, action) => {
    switch (action.type) {
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

const reduceSearchPostRequest = (state) => {
    return {
        ...state, success: false, loading: true, error: null,
    };
};

const reduceSearchPostSuccess = (state, action) => {
    return {
        ...state, searchItem: action.payload.items.products, success: true, loading: false, error: null,
    };
};
const reduceSearchPostFail = (state, action) => {
    return {
        ...state, success: false,  loading: false, error: action.payload.error,
    };
};




