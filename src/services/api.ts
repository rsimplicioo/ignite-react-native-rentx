import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.countrylayer.com/v2/'
});

export { api };