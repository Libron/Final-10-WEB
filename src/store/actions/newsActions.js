import axios from '../../axios-instance';
import {
    ADD_POST_SUCCESS, FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS, FETCH_POST_FAILURE, FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    REMOVE_POST_SUCCESS
} from "./actionTypes";

export const fetchNewsRequest = () => ({type: FETCH_NEWS_REQUEST});
export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});
export const fetchNewsFailure = error => ({type: FETCH_NEWS_FAILURE, error});

export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchPostRequest = () => ({type: FETCH_POST_REQUEST});
export const fetchPostFailure = error => ({type: FETCH_POST_FAILURE, error});

export const addPostSuccess = () => ({type: ADD_POST_SUCCESS});
export const removePostSuccess = (id) => ({type: REMOVE_POST_SUCCESS, id});

export const fetchNews = () => {
    return dispatch => {
        dispatch(fetchNewsRequest());
        return axios.get('/news').then(response => {
            dispatch(fetchNewsSuccess(response.data));
        }, error => {
            dispatch(fetchNewsFailure(error));
        });
    }
};

export const fetchPost = (id) => {
    return dispatch => {
        dispatch(fetchPostRequest());
        return axios.get('/news/' + id).then(response => {
            dispatch(fetchPostSuccess(response.data));
        }, error => {
            dispatch(fetchPostFailure(error));
        });
    }
};

export const addPost = (data, history) => {
    return dispatch => {
        return axios.post('/news', data).then(
            () => {
                dispatch(addPostSuccess());
                history.push('/');
            });
    }
};

export const removePost = (id) => {
    return dispatch => {
        return axios.delete('/news/'+ id).then(
            () => {
                return dispatch(removePostSuccess(id));
            }
        )
    }
};