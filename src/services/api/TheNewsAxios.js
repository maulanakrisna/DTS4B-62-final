import axios from 'axios';

const API_KEY = 'XeBh4j9YeLp1UBCBp8paxShW4YDvo13utkOmwFJ1';
const baseUrl = 'https://api.thenewsapi.com/v1/';

const TheNewsAxios = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
    locale: 'id',
  },
});

export default TheNewsAxios;