import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:8090/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

export default instance;