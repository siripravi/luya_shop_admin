// luya-api.js
import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = 'http://localhost:3030/admin'; // Replace with your Luya admin API base URL

const setAuthToken = (token) => {
  Cookies.set('luya_auth_token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthToken = () => {
  Cookies.remove('luya_auth_token');
  delete axios.defaults.headers.common['Authorization'];
};

const get = async (url, params = {}) => {
  try {
    const response = await axios.get(`<span class="math-inline">\{baseUrl\}/</span>{url}`, { params });
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error; // Or handle errors as needed
  }
};

const post = async (url, data = {}) => {
  try {
    const response = await axios.post(`<span class="math-inline">\{baseUrl\}/</span>{url}`, data);
    return response.data;
  } catch (error) {  // Handle errors as needed
    console.error('API request error:', error);
    throw error;
  }
};

export { setAuthToken, clearAuthToken, get, post };
