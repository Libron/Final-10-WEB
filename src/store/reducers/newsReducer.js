import {
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS, FETCH_POST_FAILURE,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    news: [],
    post: null,
    loading: false,
    error: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
        case FETCH_NEWS_REQUEST: {
            return {...state, loading: true};
        }

        case FETCH_POST_FAILURE:
        case FETCH_NEWS_FAILURE: {
            return {...state, loading: false, error: action.error}
        }

        case FETCH_NEWS_SUCCESS: {
            return {...state, loading: false, news: action.news};
        }

        case FETCH_POST_SUCCESS: {
            return {...state, loading: false, post: action.post};
        }

        default:
            return state;
    }
};

export default newsReducer;