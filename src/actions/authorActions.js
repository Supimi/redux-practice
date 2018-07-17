import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions.js';

export function loadAuthorSuccess(authors){
    return {type:types.LOAD_AUTHORS_SUCCESS,authors};
}


export function loadAuthors(){
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(author => {
            dispatch(loadAuthorSuccess(author));
        }).catch(error => {
            throw(error);
        });
    };
}