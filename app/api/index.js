import { default as axios } from 'axios';

const api = axios.create({
    baseURL: "https://691d80a4d58e64bf0d3666e0.mockapi.io",
    headers:{
        Authorization:""
    }
});

export { api }