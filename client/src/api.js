import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL according to your backend API

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (email, password) => {
  try {
    const response = await api.post('/signup', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add more API functions as needed

export default api;
