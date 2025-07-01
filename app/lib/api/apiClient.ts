// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';

// // Replace with your computer's IP address
// const API_URL = 'http://192.168.1.6:8080/api'; 

// const apiClient = axios.create({
//     baseURL: API_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // This is an "interceptor" - a piece of code that runs before every API request.
// // It automatically adds the JWT token to the header if we have one.
// apiClient.interceptors.request.use(async (config) => {
//     const token = await SecureStore.getItemAsync('authToken');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default apiClient;

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Add console log to verify the API URL when the app starts
const API_URL = 'http://192.168.1.100:8080/api';
console.log('API URL configured as:', API_URL);

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // Add timeout to avoid hanging requests
    timeout: 10000
});

// Add request/response interceptors with better logging
apiClient.interceptors.request.use(async (config) => {
    console.log(`🚀 Making ${config.method?.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
});

apiClient.interceptors.response.use(
    (response) => {
        console.log(`✅ Response from ${response.config.url}: Status ${response.status}`);
        return response;
    },
    (error) => {
        console.error(`❌ API Error for ${error.config?.url}:`, error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        } else if (error.request) {
            console.error('No response received. Check network connection or backend server.');
        }
        return Promise.reject(error);
    }
);

export default apiClient;