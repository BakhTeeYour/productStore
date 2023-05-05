import {
    POST_SORT_BY_PRICE_REQUEST, POST_SORT_BY_PRICE_SUCCESS, POST_SORT_BY_PRICE_FAIL
} from "../actions";

export const initialState = {
    sorted: [],
    isSorted: false,
    loading: false,
    error: null,
};

export const reducePostSortByPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SORT_BY_PRICE_REQUEST :
            return reducePostSortByPriceRequest(state, action);
        case POST_SORT_BY_PRICE_SUCCESS :
            return reducePostSortByPriceSuccess(state, action);
        case POST_SORT_BY_PRICE_FAIL :
            return reducePostSortByPriceFail(state, action);
        default:
            return state;
    }
};

const reducePostSortByPriceRequest = (state) => {
    return {
        ...state, isSorted: false, loading: true, error: null,
    };
};

const reducePostSortByPriceSuccess = (state, action) => {
    return {
        ...state,
        sorted: action.payload.items,
        isSorted: true,
        loading: false,
        error: null,
    };
};
const reducePostSortByPriceFail = (state, action) => {
    return {
        ...state, isSorted: false, loading: false, error: action.payload.error,
    };
};





