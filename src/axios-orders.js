import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-85a01.firebaseio.com/'
});

export default instance;