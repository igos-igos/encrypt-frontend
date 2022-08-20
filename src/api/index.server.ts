import axios from 'axios';

const server = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
});

export default server;
