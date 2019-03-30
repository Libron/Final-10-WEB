import {FETCH_NEWS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    news: [],
    loading: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS: {
            return {...state, loading: false, news: action.news}
        }
        default:
            return state;
    }
};

export default newsReducer;