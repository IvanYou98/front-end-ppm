import axios from "axios";
import {createAction} from "@reduxjs/toolkit";
import {getErrors} from "../errors";

export const apiCallBegan = createAction("apiCallBegan");

const api = ({dispatch}) => next => async action => {
    if (action.type !== apiCallBegan.type)
        return next(action);
    const {url, method, data, onSuccess, redirect, history} = action.payload;

    // dispatch the original function, otherwise it will be swallowed
    next(action);
    try {
        const response = await axios.request({
            baseURL: "http://localhost:8080/api",
            url,
            method,
            data
        });
        dispatch({
            type: onSuccess,
            payload: {
                data: response.data
            }
        });
        if (method === 'post') {
            history.push('/dashboard')
        }
    } catch (error) {
        dispatch({
            type: getErrors.type,
            payload: error.response.data
        })
        if (redirect) {
            history.push(redirect);
        }
    }
}

export default api;