import axios from 'axios';

const API_HOST = 'http://localhost:8080';
const API_BASE_PATH = '/api/auth';

const apiClient = axios.create({
    baseURL: `${API_HOST}${API_BASE_PATH}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

class AuthService {
    async register(fullName, email, password, citizenId) {
        try {
            const response = await apiClient.post('/register', {
                fullName,
                email,
                password,
                citizenId,
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.response?.data || error.message || "Registration failed");
        }
    }

    async login(email, password) {
        try {
            const response = await apiClient.post('/login', { email, password });
            const data = response.data;
            if (data && data.accessToken) {
                localStorage.setItem('authToken', data.accessToken);
                localStorage.setItem('user', JSON.stringify(data));
            }
            return data;
        } catch (error) {
            throw new Error(error.response?.data?.message || error.response?.data || error.message || "Login failed");
        }
    }

    logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch (e) {
                console.error("Error parsing user from localStorage", e);
                this.logout();
                return null;
            }
        }
        return null;
    }

    getAuthToken() {
        return localStorage.getItem('authToken');
    }
}

export default new AuthService();