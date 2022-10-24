import axios from 'axios';

const API_KEY = '8f7f44a774fcb971028e27fe573d3c08';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;