import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
});

export const get = async (path, options = {}) => {
    try {
        const response = await request.get(path, options);

        return response.data;
    } catch (error) {
        return error;
    }
};

export const post = async (path, data = {}) => {
    try {
        const response = await request.post(path, data);

        return response.data;
    } catch (error) {
        return error;
    }
};

export default request;
