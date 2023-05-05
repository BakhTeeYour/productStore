export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAIL = 'POSTS_FAIL';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const SEARCH_POST_REQUEST = 'SEARCH_POST_REQUEST';
export const SEARCH_POST_SUCCESS = 'SEARCH_POST_SUCCESS';
export const SEARCH_POST_FAIL = 'SEARCH_POST_FAIL';

export const POST_CATEGORIES_REQUEST = 'POST_CATEGORIES_REQUEST';
export const POST_CATEGORIES_SUCCESS = 'POST_CATEGORIES_SUCCESS';
export const POST_CATEGORIES_FAIL = 'POST_CATEGORIES_FAIL';

export const POST_SORT_BY_PRICE_REQUEST = 'POST_SORT_BY_PRICE_REQUEST';
export const POST_SORT_BY_PRICE_SUCCESS = 'POST_SORT_BY_PRICE_SUCCESS';
export const POST_SORT_BY_PRICE_FAIL = 'POST_SORT_BY_PRICE_FAIL';

export const loadPosts = () => async (dispatch) => {
    try {
        dispatch(postsRequest());
        const response = await fetch(`https://dummyjson.com/products/`)

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const body = await response.json();
        dispatch(postsSuccess(body));
    } catch (error) {
        dispatch(postsFail(error));
    }
};

export const loadPost = (id = 1) => async (dispatch) => {
    try {
        dispatch(postRequest());
        const response = await fetch(`https://dummyjson.com/products/${id}`)

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const body = await response.json();
        dispatch(postSuccess(body));
    } catch (error) {
        dispatch(postFail(error));
    }
};

export const loadSearchPost = (value) => async (dispatch) => {
    try {
        dispatch(searchPostRequest());
        const response = await fetch(`https://dummyjson.com/products/search?q=${value}`)

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const body = await response.json();
        dispatch(searchPostSuccess(body));
    } catch (error) {
        dispatch(searchPostFail(error));
    }
};

export const loadPostByCategories = (value) => async (dispatch) => {
    try {
        dispatch(postCategoriesRequest());
        const response = await fetch(`https://dummyjson.com/products/category/${value}`)

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const body = await response.json();
        dispatch(postCategoriesSuccess(body));
    } catch (error) {
        dispatch(postCategoriesFail(error));
    }
};

export const loadPostSortByPrice = (value) => async (dispatch) => {
    try {
        dispatch(postSortByPriceRequest());
        const response = await fetch(`https://dummyjson.com/products/`)

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const {products} = await response.json();

        if (value === 'countAsc') {
            const sortByAsc = products.sort((a, b) => a.price - b.price);
            dispatch(postSortByPriceSuccess(sortByAsc));
            return;
        }
        if (value === 'countDesc') {
            const sortByAsc = products.sort((a, b) => b.price - a.price);
            dispatch(postSortByPriceSuccess(sortByAsc));
        }

    } catch (error) {
        dispatch(postSortByPriceFail(error));
    }
};

export const postsRequest = () => {
    return {
        type: POSTS_REQUEST,
        payload: {},
    };
};

export const postsSuccess = (items) => {
    return {
        type: POSTS_SUCCESS,
        payload: {items},
    };
};

export const postsFail = (error) => {
    return {
        type: POSTS_FAIL,
        payload: {error},
    };
};

export const postRequest = () => {
    return {
        type: POST_REQUEST,
        payload: {},
    };
};

export const postSuccess = (item) => {
    return {
        type: POST_SUCCESS,
        payload: {item},
    };
};

export const postFail = (error) => {
    return {
        type: POST_FAIL,
        payload: {error},
    };
};

export const searchPostRequest = () => {
    return {
        type: SEARCH_POST_REQUEST,
        payload: {},
    };
};

export const searchPostSuccess = (items) => {
    return {
        type: SEARCH_POST_SUCCESS,
        payload: {items},
    };
};

export const searchPostFail = (error) => {
    return {
        type: SEARCH_POST_FAIL,
        payload: {error},
    };
};

export const postCategoriesRequest = () => {
    return {
        type: POST_CATEGORIES_REQUEST,
        payload: {},
    };
};

export const postCategoriesSuccess = (items) => {
    return {
        type: POST_CATEGORIES_SUCCESS,
        payload: {items},
    };
};

export const postCategoriesFail = (error) => {
    return {
        type: POST_CATEGORIES_FAIL,
        payload: {error},
    };
};

export const postSortByPriceRequest = () => {
    return {
        type: POST_SORT_BY_PRICE_REQUEST,
        payload: {},
    };
};

export const postSortByPriceSuccess = (items) => {
    return {
        type: POST_SORT_BY_PRICE_SUCCESS,
        payload: {items},
    };
};

export const postSortByPriceFail = (error) => {
    return {
        type: POST_SORT_BY_PRICE_FAIL,
        payload: {error},
    };
};