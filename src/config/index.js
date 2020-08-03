const BASE_URL = window.location.hostname.includes('localhost') ?
    'http://localhost:8000' : 'https://imersao-react-fake-backend.herokuapp.com';
    
export default {
    BASE_URL,
};