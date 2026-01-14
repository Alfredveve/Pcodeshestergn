import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 secondes timeout pour éviter les requêtes bloquées
});

// Intercepteur pour gérer les erreurs de manière centralisée
api.interceptors.response.use(
    response => response,
    error => {
        if (error.code === 'ECONNABORTED') {
            console.error('Request timeout - please check your connection');
        }
        return Promise.reject(error);
    }
);

export default api;
