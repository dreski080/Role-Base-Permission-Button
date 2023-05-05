import axios from 'axios';
import StaticVar from '../config/StaticVar';

// ===> api create
const api = axios.create({
    baseURL: StaticVar.URL_API,
    // timeout: 10000,
    headers: {}
});

// ===> api interceptors
api.interceptors.request.use(
    function (config) {
        // set headers after authentication
        config.headers['x-access-token'] = localStorage.getItem('token');
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

const getRoles = (data) => api.get('/roles/get-role', data);

export const apis = {
    getRoles
};

export default apis;
