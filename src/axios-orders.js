import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: 'https://react-learning-project-c036f.firebaseio.com'
});

export default axiosInstance; 