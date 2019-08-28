import React from 'react'
import axios from 'axios'
import store from '../store/index'
import * as variable from '../config/variable'

axios.interceptors.request.use(function(config){
    store.dispatch({type:variable.VIEW_LOADING,payload:true})
    return config;
},function(error){
    return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
    store.dispatch({type:variable.VIEW_LOADING,payload:false});
    return response;
},function(error){
    return Promise.reject(error);
});
React.Component.axios=axios;
window.axios = axios;

export default axios;

