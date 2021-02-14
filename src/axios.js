import axios from "axios";


const instance = axios.create({
    //baseURL : "https://sleepy-hamlet-70742.herokuapp.com"
    baseURL : "http://localhost:5000"
});

export default instance;      