import axios from 'axios';

/** make an instance of the base url and append api fetch endpoints */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;