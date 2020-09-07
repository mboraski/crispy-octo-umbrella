import axios from 'axios';

export const seriesAPI = axios.create({
    baseURL: 'http://localhost:9002',
    params: {
        seriesId: '',
    },
});
