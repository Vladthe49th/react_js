import axios from 'axios';

export const api = axios.create({
  baseURL: '/api', // Тепер запити йдуть через proxy Vite (без CORS)
});