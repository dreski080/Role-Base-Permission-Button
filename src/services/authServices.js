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

// const login = (data) => {
//     console.log(data);
//     return api.post('/users/login', data).then((response) => {
//         if (response.data.accessToken) {
//             TokenService.setUser(response.data);
//         }
//         return response.data;
//     });
// };

const login = (data) => api.post('/users/login', data);

export const apis = {
    login
};

export default apis;
