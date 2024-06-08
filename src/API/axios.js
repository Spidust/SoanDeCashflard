import axios from "axios";
const instance = axios.create({
    baseURL: "https://cashflardbackend.onrender.com/api/",
})

export default instance;

//http://localhost:1703