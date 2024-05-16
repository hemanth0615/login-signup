import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://ec2-16-170-249-134.eu-north-1.compute.amazonaws.com/api' : 'http://localhost:5000/api';

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
