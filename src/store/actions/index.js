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

const PRODUCT_URL = 'https://dummyjson.com/products/';

export const loadPosts = (value) => async (dispatch) => {
    try {
        dispatch(postsRequest());
        const response = await fetch(PRODUCT_URL);

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const {products} = await response.json();

        if (value === 'countAsc') {
            const sortByAsc = products.sort((a, b) => a.price - b.price);
            dispatch(postsSuccess(sortByAsc));
            return;
        }
        if (value === 'countDesc') {
            const sortByDesc = products.sort((a, b) => b.price - a.price);
            return dispatch(postsSuccess(sortByDesc));
        }
        dispatch(postsSuccess(products))
    } catch (error) {
        dispatch(postsFail(error));
    }
};

export const loadPost = (id = 1) => async (dispatch) => {
    try {
        dispatch(postRequest());
        const response = await fetch(`${PRODUCT_URL}${id}`)

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
        const response = await fetch(`${PRODUCT_URL}search?q=${value}`)

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const {products} = await response.json();
        dispatch(searchPostSuccess(products));
    } catch (error) {
        dispatch(searchPostFail(error));
    }
};

export const loadPostByCategories = (value) => async (dispatch) => {
    try {
        dispatch(postCategoriesRequest());
        if (value !== 'home') {
            const response = await fetch(`${PRODUCT_URL}/category/${value}`);

            if (!response.ok) {
                throw new Error('bad http status');
            }

            const {products} = await response.json();
            dispatch(postCategoriesSuccess(products));
            return;
        }
        const response = await fetch(PRODUCT_URL);

        if (!response.ok) {
            throw new Error('bad http status');
        }

        const {products} = await response.json();
        dispatch(postCategoriesSuccess(products));
    } catch (error) {
        dispatch(postCategoriesFail(error));
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
