import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-aa022.firebaseio.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
