import axios from 'axios';

export const authAPI = axios.create({
    baseURL: 'http://localhost:9002',
});
