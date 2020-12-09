import axios from 'axios';
// import { logout } from '../redux/actions/auth'

const Api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
});

const DEFAULT_ERROR = { error: true, errors: [{ message: 'Falha de rede.' }] };

Api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("erroe", error)
        // if (error.response.status === 401) {
        //     store.dispatch(logout())
        // }

        if (!error.response) error.response = { data: DEFAULT_ERROR };

        return Promise.reject(error);
    },
);

export default Api;