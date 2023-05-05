import {
    POST_CATEGORIES_REQUEST, POST_CATEGORIES_SUCCESS, POST_CATEGORIES_FAIL
} from "../actions";

export const initialState = {
    categories: [],
    isCategorySuccess: false,
    loading: false,
    error: null,
};

export const postCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CATEGORIES_REQUEST :
            return reducePostCategoriesRequest(state, action);
        case POST_CATEGORIES_SUCCESS :
            return reducePostCategoriesSuccess(state, action);
        case POST_CATEGORIES_FAIL :
            return reducePostCategoriesFail(state, action);
        default:
            return state;
    }
};

const reducePostCategoriesRequest = (state) => {
    return {
        ...state, isCategorySuccess: false, loading: true, error: null,
    };
};

const reducePostCategoriesSuccess = (state, action) => {
    return {
        ...state, categories: action.payload.items.products, isCategorySuccess: true, loading: false, error: null,
    };
};
const reducePostCategoriesFail = (state, action) => {
    return {
        ...state, isCategorySuccess: false, loading: false, error: action.payload.error,
    };
};





