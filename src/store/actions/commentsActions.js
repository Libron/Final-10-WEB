import axios from '../../axios-instance';
import {
    ADD_COMMENT_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS, REMOVE_COMMENT_SUCCESS
} from "./actionTypes";

export const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});
export const addCommentSuccess = () => ({type: ADD_COMMENT_SUCCESS});
export const removeCommentSuccess = (id) => ({type: REMOVE_COMMENT_SUCCESS, id});

export const fetchComments = (id) => {
    return dispatch => {
        dispatch(fetchCommentsRequest());
        return axios.get('/comments/' + id).then(response => {
                return dispatch(fetchCommentsSuccess(response.data));
            }, error => {
                dispatch(fetchCommentsFailure(error));
            });
    }
};

export const addComment = (data) => {
    return dispatch => {
        return axios.post('/comments', data).then(
            () => {
                return dispatch(addCommentSuccess());
            });
    }
};

export const removeComment = (id) => {
    return dispatch => {
        return axios.delete('/comments/' + id).then(
            () => {
                return dispatch(removeCommentSuccess(id));
            });
    }
};