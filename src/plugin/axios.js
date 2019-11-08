import axios from 'axios';
import History from './history';

const instance = axios.create({
	timeout: 30000
})

instance.interceptors.request.use(config => {
	return config;
}, err => {
	return Promise.reject(err);
});

instance.interceptors.response.use( response => {
	return response;
}, err => {
	return Promise.reject(err);
})

export default instance;

