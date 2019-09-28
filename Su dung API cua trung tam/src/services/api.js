import axios from "axios"
import * as config from "./config";

const api = axios.create({
    baseURL: config.API_URL
})

export default api