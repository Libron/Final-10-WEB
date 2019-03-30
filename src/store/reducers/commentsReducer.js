import {
    ADD_COMMENT_SUCCESS, FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS, REMOVE_COMMENT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    comments: [],
    loading: false
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return ({...state, loading: true});
        case FETCH_COMMENTS_SUCCESS:
            return ({...state, loading: false, comments: action.comments});
        case FETCH_COMMENTS_FAILURE:
            return ({...state, loading: false, error: action.error});
        case ADD_COMMENT_SUCCESS:
            return ({...state, loading: false});
        case REMOVE_COMMENT_SUCCESS:
            const idx = state.comments.findIndex(item => item.id === action.id);
            const comments = [...state.comments];
            console.log(comments, idx);
            comments.splice(idx, 1);
            return ({...state, comments, loading: false});
        default:
            return state;
    }
};

export default commentsReducer;