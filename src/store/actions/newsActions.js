import axios from '../../axios-instance';
import {FETCH_NEWS_SUCCESS} from "./actionTypes";

export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});

export const fetchNews = () => {
    return dispatch => {
        return axios.get('/news').then(
            response => dispatch(fetchNewsSuccess(response.data))
        );
    }
};